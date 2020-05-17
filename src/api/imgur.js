import qs from 'qs';
import axios from 'axios';

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
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token) {
    // we have to map through the array of images
    //  because imgur only allows upload files one at a time.
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      //  imgur requires key of image in binary format
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    });

    return Promise.all(promises);
    // Promise is a built in function that takes all promises and returns them as one
  }
};

