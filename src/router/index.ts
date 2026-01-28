import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KursusView from "../views/CourseView.vue";
import CourseDetailView from "../components/kursus/CourseDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/course",
      name: "course",
      component: KursusView,
    },
    {
      path: "/course/:id",
      name: "courseDetail",
      component: CourseDetailView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
