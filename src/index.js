import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Login from './Login.vue'
const routes = [
    {
        path: '/login',
        component: Login
    }
];
const router = new VueRouter({
    routes
})
Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render(createElement) {
        return createElement(App)
    }
})