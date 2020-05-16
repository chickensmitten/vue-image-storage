import qs from 'qs'

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = 'https://api.imgur.com/'

export default {
  login() {
    // syntax below should not be clientID here    
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    // using template string below
    // by setting this location below, users will go to the url. Forcing the user to login with imgur oauth
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  }
};

// can get this from window.location
// http://localhost:8080/oauth2/callback#
// access_token=<token>
// &
// expires_in=315360000
// &
// token_type=bearer
// &
// refresh_token=<token>
// &
// account_username=chickensmitten
// &
// account_id=130628119