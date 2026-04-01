import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/katalog', component: () => import('../views/Katalog.vue') },
  { path: '/kontakt', component: () => import('../views/Kontakt.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // To sprawi, że po przejściu na nową stronę zawsze będziesz na górze
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;