import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  // rootState is a reference to all the state that is held inside the vuex instance. 
  // Reach into other modules and access state/data in them
  async fetchImages({ rootState, commit }) {
    // rootState then file name then state object
    // rootState.auth.token old way, below is new way
    const { token } = rootState.auth;
    // api.fetchImages(token); this code is not good cause it does not wait for the API request to get back
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages ({ commit }, images) {
    console.log(images);
    commit();
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}; 
