import { createRouter, createWebHistory } from "vue-router"
import Questions from './views/Questions.vue'

const routes = [
    {
        path: '/api',
        component: Questions,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
}) 