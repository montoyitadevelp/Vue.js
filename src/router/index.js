import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { useAlertStore } from '../stores/alert.store';
import Home from '../pages/Home.vue';
import accountRoutes from './account.routes';
import usersRoutes from './users.routes';

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { ...accountRoutes },
    { ...usersRoutes },
    // catch all redirect to home page
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

router.beforeEach(async (to) => {
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();

  // redirect to login page if not logged in and trying to access a restrict
  const publicPages = ['/', '/users/login', '/users/register'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return '/users/login';
  }
});
