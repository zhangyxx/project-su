import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Myfooter from '@/components/Myfooter'
import Myindex from '@/components/Myindex'
import Product from '@/components/Product'
import Match from '@/components/Match'
import Mycenter from '@/components/Mycenter'
import Login from '@/components/Login'
import paihang from '@/components/paihang'
import Mynews from '@/components/Mynews'
import huankuan from '@/components/huankuan'
import shoucang from '@/components/shoucang'
import help from '@/components/help'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component: shoucang
    },
    {
      path: '/huankuan',
      name: 'huankuan',
      component: huankuan
    },
    {
      path: '/Mynews',
      name: 'Mynews',
      component: Mynews
    },
    {
      path: '/Myfooter',
      name: 'Myfooter',
      component: Myfooter
    },
    {
      path: '/paihang',
      name: 'paihang',
      component: paihang
    },
    {
      path: '/Myindex',
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
