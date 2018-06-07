// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import axios from './assets/plugin/axios'
import checkResp from './assets/plugin/checkResp'
import handleError from './assets/plugin/handleError';

Vue.use(ElementUI)
Vue.use(checkResp)
Vue.use(handleError)
Vue.use(axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
