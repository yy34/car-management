import { createApp } from "vue";
import "./styles/style.css";
import App from "./App.vue";
import store from "./store";
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options = {
  timeout: 2000,
  position: POSITION.TOP_CENTER,
};

app.use(Toast, options);

app.use(store).mount("#app");
