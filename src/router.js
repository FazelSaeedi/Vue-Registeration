import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Register from "@/views/Register";

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
    }
];

const router = createRouter({
    history: createWebHistory('/dist/'),
    routes
});

export default router;
