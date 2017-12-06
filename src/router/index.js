import Vue from 'vue'
import Router from 'vue-router'
import Leave from '@/pages/Leave'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
// import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/leave',
      name: 'leave',
      component: Leave
    }
  ]
})
