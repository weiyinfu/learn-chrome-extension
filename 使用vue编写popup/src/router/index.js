import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import ModuleDetail from "../views/ModuleDetail";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ModuleDetail',
        name: 'ModuleDetail',
        component: ModuleDetail,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
