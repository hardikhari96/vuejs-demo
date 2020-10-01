import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/contact.vue'
import account from '../views/account.vue'
//console.log(account);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/account',
        name: 'account',
        component: account
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
console.log(router);
export default router