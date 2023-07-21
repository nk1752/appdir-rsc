'use client'

interface User {
    id: number
    lastName: String
    firstName: String
    accountId: number
  }

let userArray: String[] = [];

export default function FirstNamePage() {
  async function getData(formData: FormData) {

    const lastname = formData.get("lastname") as String;

    const url = "http://127.0.0.1:8080" + "/api/user?lastname="+lastname;

    

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      //throw new Error('Failed to fetch data');
      throw new Error("Failed to fetch data");
    } 

    const obj = await res.json();
    //console.log('>>>>>>>>> obj >>>>>>>>>>',obj)

    userArray = obj.map((user: User) =>
        <li key={user.id}>
            {"id: "}{user.id}<br />
            {"First Nmae: "}{user.firstName}<br />
            {"Last Name: "}{user.lastName}<br /><br />
        </li>)

    console.log('>>>>>>>>> userArray >>>>>>>>>>',userArray)


  }

  return (
    <main className=" flex flex-row">
      <div className=" flex w-1/2 items-center content-center justify-center ">
        <form
          action={getData}
          className="flex flex-col bg-gray-800 max-h-52  p-4 border-4 text-stone-100 gap-4"
        >
            <label> First Name </label>
            <input
                className=" bg-gray-700"
                type="text" name="lastname"  />
            <button
                className="ring ring-offset-2 ring-blue-800 w-24 h-8 bg-gray-700 rounded-md"
                type="submit"
          ></button>
        </form>
      </div>
      <div className=" bg-black w-1/2 text-green-500 border-double border-8 border-gray-700 pl-6 h-[calc(100vh-96px)] overflow-auto">
      <ul>
        {userArray}
      </ul>
      </div>
    </main>
  );
}
