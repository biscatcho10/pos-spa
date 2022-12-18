import Vue from "vue";
import router from "./routes";
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

require('./bootstrap');

import Notifications from './Helpers/Notification';
window.Notification = Notifications;

const app = new Vue({
    el: '#app',
    router
});
