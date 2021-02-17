import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from "@/views/Login";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory('/dist/'),
    routes
});

export default router;
