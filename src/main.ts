import { createApp } from "vue";
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import router from './router';
import store from './store';
import i18n from './locale';
import App from "./App.vue";
import './assets/style/global.less';
// main.ts
import 'virtual:uno.css'

const app = createApp(App);

app.use(ArcoVue, {})
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");