
import { getCookie } from "cookies-next";
import { cookies } from 'next/headers';

export default function CurrentUser() {

    const cookieStore = cookies();
    
    const currentUser = cookieStore.get('currentUser')?.value;
       
    return (
        <div>  { currentUser }   </div>
        
    )
}