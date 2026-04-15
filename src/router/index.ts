import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent, h } from "vue";

// Lazy Loading Routes - Matches React implementation
// Loading fallback component
const LoadingComponent = {
  render() {
    return h('div', { 
      class: 'flex h-[50vh] items-center justify-center' 
    }, [
      h('p', { class: 'text-gray-500 text-lg' }, 'Loading...')
    ]);
  }
};

const HomeView = defineAsyncComponent({
  loader: () => import("../views/HomeView.vue"),
  loadingComponent: LoadingComponent,
  delay: 200,
  timeout: 10000,
});

const KursusView = defineAsyncComponent({
  loader: () => import("../views/CourseView.vue"),
  loadingComponent: LoadingComponent,
  delay: 200,
  timeout: 10000,
});

const CourseDetailView = defineAsyncComponent({
  loader: () => import("../components/kursus/CourseDetail.vue"),
  loadingComponent: LoadingComponent,
  delay: 200,
  timeout: 10000,
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/courses",
      name: "course",
      component: KursusView,
    },
    {
      path: "/courses/:id",
      name: "courseDetail",
      component: CourseDetailView,
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
