import { createRouter, createWebHistory } from "vue-router"
import StartPage from './views/StartPage.vue'

const routes = [
    {
        path: '/',
        component: StartPage,
    },
    {
        path: '/questions',
        component: Questions
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
}) 