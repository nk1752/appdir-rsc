import {Amplify, Auth} from 'aws-amplify'
import config from './cognito-config'

Amplify.configure(config)


export async function SignOutUser() {
    try {
        const sign = await Auth.signOut();
        alert('signing out...')
        
        
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

 