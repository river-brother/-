import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Leave from '@/pages/Leave'
// import Leave2 from '@/pages/Leave2'
import Index from '@/pages/Index'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/app',
      component: Index
    },
    {
      path: '/leave',
      component: Leave
    }
  ]
})
