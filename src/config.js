/* Configurations for Linkedin Api */

/* Client Id for Linkedin */
export const clienID = '81d9ao7ts0cheo';

/* Secret Key for Linkedin */
export const secretKey = 'RGFmRwNtiaTqfZhB';

/* Gets host name from the url */
const urlHost = window.location.host;
//const urlHost ='bigfirmadvisors.auth0.com';

/* Callback url for Linkedin */
export const callBackUrl = 'http://localhost:3002/job/callback/linkedin';

/* Backend route for getting Linkedin Access Token */
export const accessTokenRoute = 'http://localhost:3002/linkedinaccesstoken';

/* Backend route for getting Linkedin User Details */
export const userDetailsRoute = 'http://localhost:3002/linkedinuserdetails';