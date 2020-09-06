import Vue from "vue";
import Router from "vue-router";
import HoverDemo1 from "@/views/hover/demo1.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HoverDemo1",
      component: HoverDemo1
    }
  ]
});
