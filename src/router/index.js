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
import huankuan2 from '@/components/huankuan2'
import shoucang from '@/components/shoucang'
import help from '@/components/help'
import tongzhi from '@/components/tongzhi'
import Register from '@/components/Register'
import Forgetpass from '@/components/Forgetpass'
import Match2 from '@/components/Match2'
<<<<<<< HEAD
import Match3 from '@/components/Match3'
import Match4 from '@/components/Match4'
import Match5 from '@/components/Match5'
import Match6 from '@/components/Match6'
=======
import zixun from '@/components/zixun'
>>>>>>> e82252dd13138b8710923bfab728ea402603577d
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
<<<<<<< HEAD
            path: '/Match6',
            name: 'Match6',
            component: Match6,
        },
        {
            path: '/Match5',
            name: 'Match5',
            component: Match5,
        },
        {
            path: '/Match4',
            name: 'Match4',
            component: Match4,
        },
        {
            path: '/Match3',
            name: 'Match3',
            component: Match3,
=======
            path: '/zixun',
            name: 'zixun',
            component: zixun,
>>>>>>> e82252dd13138b8710923bfab728ea402603577d
        },
        {
            path: '/Match2',
            name: 'Match2',
            component: Match2,
        },
        {
            path: '/Forgetpass',
            name: 'Forgetpass',
            component: Forgetpass
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/help',
            name: 'help',
            component: help
        },
        {
            path: '/tongzhi',
            name: 'tongzhi',
            component: tongzhi
        },
        {
            path: '/shoucang',
            name: 'shoucang',
            component: shoucang
        },
        {
            path: '/huankuan2',
            name: 'huankuan2',
            component: huankuan2
        },
        {
            path: '/huankuan',
            name: 'huankuan',
            component: huankuan
        },
        {
            path: '/Mynews',
            name: 'Mynews',
            component: Mynews,
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
            component: Match
        },
        {
            path: '/Mycenter',
            name: 'Mycenter',
            component: Mycenter
        },
    ]
})