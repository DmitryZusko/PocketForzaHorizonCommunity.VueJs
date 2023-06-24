// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DesignsView from "@/views/DesignsView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  { path: "/designs", component: DesignsView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
