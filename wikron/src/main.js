// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'

import 'jquery/dist/jquery.min'
 
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
// Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
