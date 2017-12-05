import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Leave = r => require.ensure([], () => r(require('@/pages/Leave.vue')), 'Leave')
const Leave2 = r => require.ensure([], () => r(require('@/pages/Leave2.vue')), 'Leave2')
const Index = r => require.ensure([], () => r(require('@/pages/Index.vue')), 'Index')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {path:'/leave2',component:Leave2,}
      ]
    },
    {
      path: '/leave',
      component: Leave,
       children:[
         {path:'/leave2',component:Leave2}
       ]
    }
  ]
})
