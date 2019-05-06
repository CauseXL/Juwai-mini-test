import Vue from 'vue';
import axios from 'axios';
import VeeValidate from 'vee-validate';
import VueProgressBar from 'vue-progressbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const options = {
    color: '#e60000',
    thickness: '5px',
};

Vue.use(VueProgressBar, options);
Vue.use(VeeValidate);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
