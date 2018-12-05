// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './sotre'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Cookies from 'js-cookie';
Vue.use(iView)
Vue.config.productionTip = false

router.beforeEach((from,to,next)=>{
    const userState=Cookies.get('userInfo');
    // 未登录且要跳转的页面不是登录页
    if(userState == undefined && from.path !== '/login'){
        Cookies.remove('userInfo');
        next({ path: '/login' })  
    }else if(userState == undefined && from.path === '/login'){
        Cookies.remove('userInfo');
        // 未登陆且要跳转的页面是登录页
        next()
    }else if(userState !== undefined && from.path === '/login'){
        // 已登录且要跳转的页面是登录页
        next({ path: '/home' }) 
    }
    else{
        if(from.name){  // 有用户信息和路由名称的，直接跳要路由的页面。
            next()
        }else{  // 有用户信息，没有路由名称的，直接跳404页面。
            next({path:'/404'})
        }
        // store.dispatch('getUserInfo').then(user => {
        //     // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        //     if (canTurnTo(to.name, user.access, routes)) next() // 有权限，可访问
        //     else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
        // })
    }
})
router.afterEach(to=>{
    window.document.title=to.meta.title;
    window.scrollTo(0,0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
