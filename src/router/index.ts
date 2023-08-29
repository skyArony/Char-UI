import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatView from "../views/ChatView.vue";
import FrameView from "../views/FrameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FrameView,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "chat",
          component: ChatView,
        },
        {
          path: "about",
          component: () => import("../views/AboutView.vue"), // 懒加载写法
        },
      ],
    },
  ],
});

export default router;
