import Vue from "vue";
import VueRouter from "vue-router";
import home from "../co-home/views/home.vue"
import about from "../co-home/views/about.vue"
// import home from "@/pages/co-home/views/home.vue";
console.log('router')
Vue.use(VueRouter);

const routes = [
  //針對vite啟動時的導向
  // {
  //   path:'/',
  //   redirect:'/co-index'
  // },
  // {
  //   path: "/co-index",
  //   component: home,
  //   children:[
  //       {
  //           path:"about",
  //           // component:()=>import("@/pages/co-home/views/about.vue")
  //           component:about
  //       }
  //   ]
  // },
  {
    path: "/build_test/co-index",
    component: home,
  },
  {
    path: "/build_test/co-index/about",
    component: about
  }

];

const router = new VueRouter({
  mode: "history",
  routes,
});


// 添加导航守卫
// router.beforeEach((to, from, next) => {
//   console.log('Navigating to:', to.path);
//   console.log('Current path:', window.location.pathname);
//   next();
// });

export default router;
