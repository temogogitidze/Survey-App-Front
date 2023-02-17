import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/store/useAuthStore";

import DashboardView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import SurveysView from "@/views/SurveysView.vue";
import AuthLayout from "@/components/layouts/AuthLayout.vue";

const routes: any[] = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "/dashboard", name: "Dashboard", component: DashboardView },
      { path: "/surveys", name: "Surveys", component: SurveysView },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    redirect: "/login",
    meta: { isGuest: true },
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: LoginView,
      },
      {
        path: "/register",
        name: "Register",
        component: RegisterView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();

  if (to.meta.requiresAuth && !store.user.token) {
    next({ name: "Login" });
  } else if (store.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
