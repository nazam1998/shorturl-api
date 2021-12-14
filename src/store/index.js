import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listLink: [],
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
    }
  },
  getters: {
    listLink: function (state) {
      return state.listLink
    }
  },
  actions: {
    shortenLink({
      commit,
      state
    }, originalLink) {
      if (!state.listLink.find(elem => elem.original === originalLink)) {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
          .then((response) =>
            commit("addLink", [
              originalLink,
              response.data.result.full_short_link,
            ])
          )
          .catch((err) => {
            console.error(err);
            this.msg = "Not a valid url";
          });
      }
    }
  },
  modules: {},
  plugins: [createPersistedState()]

})