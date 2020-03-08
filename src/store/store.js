import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import download from './modules/download'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    download
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});