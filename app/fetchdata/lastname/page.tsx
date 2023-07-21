import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

interface User {
    id: number
    lastName: String
    firstName: String
    accountId: number
  }

let userArray: String[] = [];

export default function LastNamePage() {
  async function getUserByLastName(formData: FormData) {
    "use server";
    const lastname = formData.get("lastname") as String;
    const urlinput = formData.get("urlinput") as String;

    const cookieStore = cookies();

    const accessToken = cookieStore.get("jwtToken");
    const jwtToken = accessToken?.value;
    //console.log('jwtToken ====>', jwtToken)

    const user = cookieStore.get("currentUser");
    const currentUser = user?.value;
    //console.log('curretUser ====>', currentUser)
    
    const url = urlinput + "/api/user?lastname=" + lastname;
    
    console.log(">>> fetch url >>> ", url);

    // node-fetch with options
    const res = await fetch(url);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      //throw new Error('Failed to fetch data');
      throw new Error("Failed to fetch data");
    }

    const obj = await res.json();
    console.log('>>>>>>>>> obj >>>>>>>>>>',obj)

    userArray = obj.map((user: User) =>
        <li key={user.id}>
            {"id: "}{user.id}<br />
            {"First Nmae: "}{user.firstName}<br />
            {"Last Name: "}{user.lastName}<br />
            {"Account ID: "}{user.id}<br /><br />
        </li>)
    //console.log('>>>>>>>>> userArray >>>>>>>>>>',userArray)

    revalidatePath('/fetchdata/lastname');

  }

  return (
    <main className=" flex flex-row">
      <div className=" flex w-1/2 items-center content-center justify-center ">
        <form
          action={getUserByLastName}
          className="flex flex-col bg-gray-800 max-h-56  p-4 border-4 text-stone-100 gap-4"
        >
            <label> Last Name </label>
            <input
                className=" bg-gray-700"
                type="text" name="lastname"  />
            
            <label> Fetch URL </label>
            <input
                className=" bg-gray-700"
                type="text" name="urlinput"  />
            
            <button
                className="ring ring-offset-2 ring-blue-800 w-24 h-8 text-stone-100 bg-gray-700 rounded-md"
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
