import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router';
import store from './store';


import jQuery from 'jquery';
import 'animate.css/animate.min.css'
import 'easing-js/easing.min.js'
import 'owl.carousel/dist/assets/owl.carousel.min.css';






window.jQuery = jQuery;
window.$ = jQuery;



const app = createApp(App);

// Initiate the wowjs
import Wow from 'wow.js';
new Wow().init();

// Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 45) {
        document.querySelector('.nav-bar').classList.add('sticky-top');
    } else {
        document.querySelector('.nav-bar').classList.remove('sticky-top');
    }
});




app.use(store);
app.use(router);
app.mount('#app');