// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/init.css'
import '../src/js/app'

// var token = window.localStorage.getItem("token")
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined')) {
//     next({
//       path: '/login'
//     })
//   } else {
//     next()
//   }
// })

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
