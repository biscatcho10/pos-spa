import Vue from "vue";
import VueRouter from "vue-router";

// import components

import home from "./components/home";


const routes = [
    { path: "/", component: home, name: "home" },
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "hash"
});

export default router;
