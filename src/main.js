import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store/store";
import router from "./router/router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  vuetify,
  store,
  router,

  render: (h) => h(App),
}).$mount("#app");
