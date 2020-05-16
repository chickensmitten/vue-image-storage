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
    // by setting this location below, users will go to the url.
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
};