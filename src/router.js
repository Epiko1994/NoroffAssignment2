import { createRouter, createWebHistory } from "vue-router"
import StartPage from './views/StartPage.vue'
import Register from './views/Register.vue'
import Result from './views/Result.vue'

const routes = [
    {
        path: '/',
        component: StartPage,
    },
    {
        path:'/register',
        component: Register
    },
    {
        path:'/result',
        component: Result
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
}) 