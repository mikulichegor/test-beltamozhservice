import VueRouter from "vue-router";

import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFoundPage,
    },
  ],
});
