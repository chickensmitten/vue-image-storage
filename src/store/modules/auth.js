import api from '../../api/imgur' //using this to get the api calls from imgur.js
import qs from 'qs';

const state = {
  token: null
};

const getters = {
  // isLoggedIn: (state) => {
  //   !!state.token
  //   // !! is to turn a value into a boolean, turning null to false, turn string to true or false
  // }
  isLoggedIn: state => !!state.token,
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  login: () => {
    api.login();
    // using the api.js file to login
  },
  finalizeLogin: ({ commit }, hash) => {
    // hash is different compared with params
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token); 
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
    // calls the token from state above and give it a new token.
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}; 

// can get this from window.location
// http://localhost:8080/oauth2/callback
// #
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
