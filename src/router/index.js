import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import( "../views/Login.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () =>
      import("../views/SignUp.vue"),
  },
  
  {
    path: "/MyListings",
    name: "MyListings",
    component: () =>
      import( "../views/MyListings.vue"),
  },
  {
    path: "/FindaDog",
    name: "FindaDog",
    component: () =>
      import( "../views/FindaDog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
