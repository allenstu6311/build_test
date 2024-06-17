import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/ex-index",
  },
  {
    path: "/ex-index",
    component: () => import("@/pages/ex-home/views/home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
