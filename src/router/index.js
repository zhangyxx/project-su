import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Myfooter from '@/components/Myfooter'
import Myindex from '@/components/Myindex'
import Product from '@/components/Product'
import Match from '@/components/Match'
import Mycenter from '@/components/Mycenter'
import Login from '@/components/Login'
import Forgetpass from '@/components/Forgetpass'
import Register from '@/components/Register'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Myfooter',
      name: 'Myfooter',
      component: Myfooter
    },
    {
      path: '/Myindex',
      name: 'Myindex',
      component: Myindex,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
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
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Forgetpass',
      name: 'Forgetpass',
      component: Forgetpass
    },
  ]
})
router.beforeEach((to, from, next) => {
 if (to.meta.requireAuth) {   //如果需要跳转 ，往下走（1）
 if (true) {   //判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
  if (to.path === '/') { //判断下一个路由是否为要验证的路由（3）
  next('/Myindex');   // 如果是直接跳到首页，
  } else {    //如果该路由不需要验证，那么直接往后走
  next();
  }
 } else {
  console.log('没有');  //如果没有登陆过，或者token 过期， 那么跳转到登录页
  next('/');
 }
 } else {       //不需要跳转，直接往下走
 next();
 }
});export default router;