import Vue from "vue";

import VueRouter from "vue-router";

// 解决vue-router在3.0版本以上重复点报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../components/home/index.vue"),
  },
  {
    path: "/login",
    component: () => import("../components/login/index.vue"),
  },
];

export const router = new VueRouter({
  routes,
});
