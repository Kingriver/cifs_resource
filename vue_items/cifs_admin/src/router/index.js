import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Main from '../components/main.vue'
import Errors from '../components/404.vue'
import Home from '../pages/home.vue'
import UserList from '../pages/user_list.vue'
import Echarts from '../pages/echarts.vue'
import Design from '../pages/design.vue'
import DesignDetail from '../pages/design_detail.vue'
Vue.use(Router)

const routes = [{
        path: '/',
        name: 'home',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: Main,
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hide: true,
                title: '首页'
            },
            component: Home
        }]
    },
    {
        path: '/user_list',
        name: 'user_list',
        component: Main,
        children: [{
            path: '/user_list',
            name: 'user_list',
            meta: {
                title: '用户列表'
            },
            component: UserList
        }]
    },
    {
        path: '/decoration',
        name: 'decoration',
        component: Main,
        children: [{
                path: '/design',
                name: 'design',
                meta: {
                    title: '设计图'
                },
                component: Design
            },
            {
                path: '/design_detail',
                name: 'DesignDetail',
                meta: {
                    title: '设计图详情'
                },
                component: DesignDetail
            },
        ]
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: Main,
        children: [{
            path: '/echarts',
            name: 'echarts',
            meta: {
                title: '图表组件'
            },
            component: Echarts
        }]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            hide: true,
            title: '登录'
        },
        component: Login
    },
    {
        path: '/404',
        name: 'error',
        meta: {
            hide: true,
            title: '页面未找到'
        },
        component: Errors
    }
]

export default new Router({
    routes
})