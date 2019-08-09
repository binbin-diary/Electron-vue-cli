/**
 *  create by wubinbin on 2019/8/8
 **/
import Vue from 'vue'
import router from './src/router/index'
import App from './src/App'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});