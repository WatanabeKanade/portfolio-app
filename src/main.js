import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false

Vue.use(VueScrollTo)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});