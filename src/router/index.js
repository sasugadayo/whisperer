import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import User from "@/views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user/:uid",
    name: "user",
    component: User,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
