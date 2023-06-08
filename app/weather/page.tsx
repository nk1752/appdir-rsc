import { revalidatePath } from "next/cache";

let cityinfo: String[] = [];

async function getData(formData: FormData) {
  "use server";

  const city = formData.get("city") as String;

  console.log(">>> city from Form >>> ", city);

  const url =
    "http://api.weatherapi.com/v1/current.json?key=" +
    process.env.WEATHER_API_KEY +
    "&q=" +
    city +
    "&aqi=yes";

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    next: {
      revalidate: 0,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const obj = await res.json();

  cityinfo.push(obj.location.name)
  cityinfo.push(obj.location.region)
  console.log('>>>>>>>>>> obj >>>>>>>>>>>',obj)
  console.log('>>>>>>>>>>>>name >>>>>>>>>>>>>>>>>>',obj.location.name)


  revalidatePath("/weather");
}

export default function Page() {


  return (
    <main className=" flex flex-row">
      <div className=" w-1/2 ">
        <form
          action={getData}
          className="flex flex-col bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4"
        >
          <label>City</label>
          <input type="text" name="city" className=" bg-gray-700" />

          <button
            className="ring ring-offset-2 ring-blue-800 w-24 h-8 bg-gray-700 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className=" bg-black text-green-500 border-double border-8 border-gray-700 w-1/2 pl-6 h-[calc(100vh-96px)] overflow-auto">
        <ul>
            {cityinfo}
        </ul>
      </div>
    </main>
  );
}
