import Vue from "vue";
import VueRouter from "vue-router";

// import components

import home from "./components/tags/index";


const routes = [
    { path: "/test", component: home, name: "home" },
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "hash"
});

export default router;
