// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/public.css'
import './assets/font/iconfont.css'
import utils from './utils/util'
import Htttp from './api/api_http.class'
import 'lib-flexible'
import Direcitve from './directive/directive'
import toaster from './assets/js/toaster'
import keyboard from './assets/js/keyboard'
import {NativeAPIInterface} from './api/login.class';


// 将工具方法绑定到全局
Vue.prototype.$utils = utils
Vue.prototype.$toaster = toaster.Toaster
Vue.prototype.$api_http = Htttp.api_http
Vue.config.productionTip = false
Vue.prototype.$NativeAPIInterface = NativeAPIInterface;
// 自定义指令 全局使用
Object.keys(Direcitve).forEach(key => {
  Vue.directive(key, Direcitve[key])
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
