import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';

Vue.use(VueRouter);

import axios from 'axios';

axios.defaults.baseURL = 'https://wd4108341731sftckd.wilddogio.com/';

const router = new VueRouter({
    routes,
    mode: 'history'
});

// router.beforeEach((to, form, next) => {
//     if (to.path == '/login' || to.path == '/register') {
//         next();
//     } else {
//         alert('Please login');
//         next('/login');
//     }
// });

// router.afterEach((to, form) => {
//     alert('afterEach');
// });


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
