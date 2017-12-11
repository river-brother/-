// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/init.css'
import '../src/js/app'

import VueResource from 'vue-resource'

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined')) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.http.interceptors.push(function (request, next) {
  if (localStorage.getItem('token') && typeof localStorage.getItem('token') !== 'undefined') {
    request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  }
  next()
})

Vue.http.options.root = 'http://120.78.145.150:8080/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
