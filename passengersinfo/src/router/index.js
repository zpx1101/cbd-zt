import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Write from "@/components/Write";
import Submit from "@/components/Submit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/write",
      name: "Write",
      component: Write
    },
    {
      path: "/submit",
      name: "Submit",
      component: Submit
    }
  ]
});
