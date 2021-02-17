import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory('/dist/'),
    routes
});

export default router;
