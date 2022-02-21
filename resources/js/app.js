require("./bootstrap");

import axios from "axios";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router).mount("#app");

axios.get("/sanctum/csrf-cookie").then(() => {
    if (store.getters["isLoggedIn"]) {
        store.dispatch("me");
    }
});
