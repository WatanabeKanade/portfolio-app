import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import uploader from './modules/uploader'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    uploader
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});