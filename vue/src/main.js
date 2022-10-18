import Vue from "vue";
import App from "./App.vue";
// element-ui
import elementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

// socketIO
import socketIO from "vue-socket.io";

// router
import { router } from "./router";

// vuex
import store from "./store";

// less
import less from "less";

Vue.config.productionTip = false;

// 将 vuex 放到全局
Vue.prototype.vuex = store;

Vue.use(elementUI)
  .use(
    new socketIO({
      debug: false, // debug调试，生产建议关闭
      connection: "http://localhost:3000",
    })
  )
  .use(less);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
