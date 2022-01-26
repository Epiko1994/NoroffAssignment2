import { createRouter, createWebHistory } from "vue-router"
import StartPage from './views/StartPage.vue'

const routes = [
    {
        path: '/',
        component: StartPage,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
}) 