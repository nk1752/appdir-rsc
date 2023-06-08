/* eslint-disable */

import { strict } from "assert";

const config = {
  // REQUIRED - Amazon Cognito Region
  region: 'us-east-1',

  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'us-east-1_00c1918jH',

  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: '52bqtlnmjv9dvslkip0kkpoco2',

  // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
  mandatorySignIn: true,

  // (optional) - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    cookieStorage: {
        // - Cookie domain (only required if cookieStorage is provided)
        domain: '.pocvivahealth.com',
        // (optional) - Cookie path
        path: '/',
        // (optional) - Cookie expiration in days
        expires: 365,
        // (optional) - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        sameSite: 'strict', //'strict' | 'lax',
        // (optional) - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        secure: false,
      },
  
  // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
  // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
  signUpVerificationMethod: 'code', // 'code' | 'link'   
}

export default config;