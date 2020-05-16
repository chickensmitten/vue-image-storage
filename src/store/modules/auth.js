import api from '../../api/imgur' //using this to get the api calls from imgur.js

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



