/**
 *  create by wubinbin on 2019/8/9
 **/
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter);

const Router = [
    {
        path: '/',
        component: App, // 顶层路由，对应index.html
        meta: { title: '' },
        redirect: '/home', // 默认跳转
        children: [
            {
                path: '/home',
                component: () => import('@src/component/hello.vue'),
                name: 'home',
                meta: {
                    title: '首页'
                }
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes: Router
});

export default router;