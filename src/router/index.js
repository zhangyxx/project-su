import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Myfooter from '@/components/Myfooter'
import Myindex from '@/components/Myindex'
import Product from '@/components/Product'
import Match from '@/components/Match'
import Mycenter from '@/components/Mycenter'
// import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/Myfooter',
      name: 'Myfooter',
      component: Myfooter
    },
    {
      path: '/',
      name: 'Myindex',
      component: Myindex
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Match',
      name: 'Match',
      component:Match
    },
    {
      path: '/Mycenter',
      name: 'Mycenter',
      component:Mycenter
    },
  ]
})
