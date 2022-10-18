import { createApp } from "vue";
import router from "./router/index.ts";
import store from "./store/index.ts";
import App from "./App.vue";

createApp(App).use(router).use(store).mount('#app');
