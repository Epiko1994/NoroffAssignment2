import { createRouter, createWebHistory } from "vue-router"
import Register from "./views/Register.vue"

const routes = [
    {
        path: "/",
        component: Register
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
}) 