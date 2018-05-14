import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue';
import About from './components/about/About.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

import Contact from './components/about/Contact.vue';
import Delivery from './components/about/Delivery.vue';
import History from './components/about/History.vue';
import Order from './components/about/Order.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin },
    {
        path: '/about', name: 'aboutLink', component: About, redirect: '/history', children: [
            { path: '/contact', name: 'contactLink', component: Contact },
            { path: '/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/history', name: 'historyLink', component: History },
            { path: '/order', name: 'orderLink', component: Order }
        ]
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: '*', redirect: '/' }
];

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
