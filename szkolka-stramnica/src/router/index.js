import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const routes = [
  { path: '/', component: Home },
  //{ path: '/katalog', component: () => import('../views/Katalog.vue') },
  { path: '/kontakt', component: () => import('../views/Kontakt.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;