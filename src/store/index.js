import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listLink: [],
    msg: ''
  },
  mutations: {
    addLink: function (state, linkTab) {
      state.listLink.push({
        original: linkTab[0],
        shorted: linkTab[1]
      })
    },
    remove: function (state, index) {
      state.listLink.splice(index, 1);
    },
    clearAll: function (state) {
      state.listLink = [];
    },
    setMsg: function (state, value) {
      state.msg = value
    }
  },
  getters: {
    listLink: function (state) {
      return state.listLink
    },
    msg: function (state) {
      return state.msg
    }
  },
  actions: {
    shortenLink({
      commit,
      state
    }, originalLink) {
      if (!state.listLink.find(elem => elem.original === originalLink)) {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
          .then((response) => {
            commit("addLink", [
              originalLink,
              response.data.result.full_short_link,
            ]);
            commit('setMsg', '');
          })
          .catch((err) => {
            console.error(err);
            commit('setMsg', "Not a valid url");
          });
      }
    }
  },
  modules: {},
  plugins: [createPersistedState({
    paths: ['listLink'],
  })]

})