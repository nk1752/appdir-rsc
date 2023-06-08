'use client'

import { deleteCookie } from 'cookies-next'
import {Amplify, Auth} from 'aws-amplify'
import config from '@/cognito/cognito-config'

import { useRouter } from 'next/navigation'




Amplify.configure(config)


export default function SignOut() {

    const router = useRouter();

    async function handleSignOut() {   
             
        
        await Auth.signOut()
        .then(() => console.log('signed out'))
        .catch(() => console.log('error signing out'))
       
        
        // clear cookies
        deleteCookie('currentUser')
        deleteCookie('jwtToken')    
    }

    //router.refresh();

    return (
        
        <button
            className="ring ring-offset-2 ring-blue-800 w-24 h-8 bg-gray-800 rounded-md"
            onClick={handleSignOut}
            >
            sign out
        </button>
   
    )
}