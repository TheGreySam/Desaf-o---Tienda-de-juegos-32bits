import Vue from 'vue'
import App from './App.vue'
window.$ = window.jQuery = require('jquery')
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js";
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
