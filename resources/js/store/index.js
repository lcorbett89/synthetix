import { createStore } from 'vuex';

export default createStore({
	state: {
		token: localStorage.getItem('jwt') || undefined,
		user: {
			id: null,
			name: null,
			email: null,
		},
		jokes: [],
		jokesToVoteOn: [],
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			if (!token) {
				localStorage.removeItem('jwt');
				delete window.axios.defaults.headers.common['Authorization'];
			} else {
				localStorage.setItem('jwt', token);
				window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			}
		},
		setUser(state, user) {
			state.user = user;
		},
		setJokes(state, jokes) {
			state.jokes = jokes;
		},
		setJokesToVoteOn(state, jokes) {
			state.jokesToVoteOn = jokes;
		},
	},
	actions: {
		async login({ state, commit }, userCredentials) {
			await axios.get('/sanctum/csrf-cookie');

			return axios
				.post('/api/login', userCredentials)
				.then((response) => {
					commit('setToken', response.data.token);
					commit('setUser', response.data.user);
					return state.user;
				})
				.catch((error) => {
					return error;
				});
		},
		async me({ state, commit }, userCredentials) {
			await axios.get('/sanctum/csrf-cookie');

			return axios
				.get('/api/me')
				.then((response) => {
					commit('setUser', response.data.data);
					return state.user;
				})
				.catch((error) => {
					return error;
				});
		},
		async logout({ state, commit }) {
			await axios.get('/sanctum/csrf-cookie');

			return axios
				.get('/api/logout')
				.then((response) => {
					commit('setToken', null);
					commit('setUser', null);
					return true;
				})
				.catch(function (error) {
					console.error(error);

					return error;
				});
		},

		getJokes({ state, commit }, params) {
			return axios
				.get('/api/jokes', params)
				.then((response) => {
					commit('setJokes', response.data.data);

					return state.jokes;
				})
				.catch(function (error) {
					console.error(error);

					return error;
				});
		},

		getJokesToVote({ state, commit }) {
			return axios
				.get('/api/jokes?voteable=true')
				.then((response) => {
					commit('setJokesToVoteOn', response.data.data);

					return state.jokesToVoteOn;
				})
				.catch(function (error) {
					console.error(error);

					return error;
				});
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
	},
});
