import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "https://",
    component: Home
  },
  {
    path: "/projects",
    name: "/projects",
    component: Projects
  },
  {
    path: "/about",
    name: "/about",
    component: About
  },
  {
    path: "/contact",
    name: "/contact",
    component: Contact
  },
];

const router = new VueRouter({
  routes
});

export default router;
