import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./views/index.vue";
import Login from "./views/login.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
    ]
})