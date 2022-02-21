import { createStore } from "vuex";

export default createStore({
    state: {
        token: localStorage.getItem("jwt") || undefined,
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
                localStorage.removeItem("jwt");
                delete window.axios.defaults.headers.common["Authorization"];
            } else {
                localStorage.setItem("jwt", token);
                window.axios.defaults.headers.common["Authorization"] =
                    "Bearer " + token;
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
        login({ state, commit }, userCredentials) {
            return axios
                .post("/api/login", userCredentials)
                .then((response) => {
                    commit("setToken", response.data.token);
                    commit("setUser", response.data.user);
                    return state.user;
                });
        },
        me({ state, commit }) {
            return axios
                .get("/api/me")
                .then((response) => {
                    commit("setUser", response.data.data);
                    return state.user;
                })
                .catch((error) => {
                    commit("setToken", null);
                    commit("setUser", null);

                    return Promise.reject(error);
                });
        },
        logout({ commit }) {
            return axios.post("/api/logout").finally((response) => {
                commit("setToken", null);
                commit("setUser", null);
                commit("setJokes", []);
                commit("setJokesToVoteOn", []);
            });
        },

        getJokes({ state, commit }, params) {
            return axios.get("/api/jokes", params).then((response) => {
                commit("setJokes", response.data.data);

                return state.jokes;
            });
        },

        getJokesToVote({ state, commit }) {
            commit("setJokesToVoteOn", []);

            return axios.get("/api/jokes?voteable=true").then((response) => {
                commit("setJokesToVoteOn", response.data.data);

                return state.jokesToVoteOn;
            });
        },

        voteOnJoke({}, jokeId) {
            return axios.post(`/api/jokes/${jokeId}/vote`);
        },

        submitJoke({}, joke) {
            return axios.post(`/api/jokes`, joke);
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.token,
    },
});
