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

router.beforeEach((to, from, next) => {
  console.log(
    "From- to Route:",
    from.name,
    "->",
    to.name,
    "korisnik",
    store.currentUser
  ); // Log the route name for debugging
  console.log("Metadata:", to.meta); // Log the metadata object for debugging

  next();

  const noUser = store.currentUser === null;
  console.log("noUser", noUser);

  if (noUser && to.meta.requiresAuth) {
    console.log("User isnt logged in, redirecting to login");
    next("login");
  } else {
    next();
  }
});

export default router;
