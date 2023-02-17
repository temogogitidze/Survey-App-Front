import { createApp, markRaw } from "vue";
import "@/style.css";
import App from "@/App.vue";

import { createPinia } from "pinia";

import router from "@/router";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
const app = createApp(App);

app.use(router);

app.use(pinia);
app.mount("#app");
