import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';

// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
app.use(VueAxios, axios);