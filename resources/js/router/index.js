import { createWebHistory, createRouter } from 'vue-router';

import Login from '../Pages/Login.vue';
import Jokes from '../Pages/Jokes.vue';
import Vote from '../Pages/Vote.vue';

import store from '../store';

export const routes = [
	{
		name: 'login',
		path: '/login',
		component: Login,
	},
	{
		name: 'jokes',
		path: '/jokes',
		component: Jokes,
	},
	{
		name: 'vote',
		path: '/jokes/vote',
		component: Vote,
		meta: { requiresAuth: true },
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

// router.beforeResolve((to) => {
// 	if (to.meta.requiresAuth && !store.getters['isLoggedIn']) return false;
// });

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters['isLoggedIn']) {
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
