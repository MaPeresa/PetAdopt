import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },

  {
    path: "/MyListings",
    name: "MyListings",
    component: () => import("../views/MyListings.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/FindaDog",
    name: "FindaDog",
    component: () => import("../views/FindaDog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await store.checkAuth(); // Await for auth check

  if (isAuthenticated && ["Login", "SignUp"].includes(to.name)) {
    console.log("Redirecting to home because user is already logged in.");
    next({ name: "home" });
  } else if (!isAuthenticated && to.meta.requiresAuth) {
    console.log("User isn't logged in, redirecting to login.");
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
