import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    userInfo: {
      username: "",
      socketID: "",
    },
  },
  mutations: {
    setLoginState(state, data) {
      state.login = data;
    },
  },
});
