import { createWebHistory, createRouter } from "vue-router";

import Login from "../Pages/Login.vue";
import Jokes from "../Pages/Jokes.vue";
import CreateJoke from "../Pages/CreateJoke.vue";
import Vote from "../Pages/Vote.vue";

import store from "../store";

export const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
    },
    {
        name: "jokes",
        path: "/jokes",
        component: Jokes,
        meta: { requiresAuth: true },
    },
    {
        name: "vote",
        path: "/jokes/vote",
        component: Vote,
        meta: { requiresAuth: true },
    },
    {
        name: "jokes.create",
        path: "/jokes/create",
        component: CreateJoke,
        meta: { requiresAuth: true },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/jokes",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters["isLoggedIn"]) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;
