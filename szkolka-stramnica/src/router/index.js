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
  scrollBehavior(to, from, savedPosition) {
    // Odświeżenie / pierwsze wejście — zawsze na górę (ignoruj hash w URL)
    if (!from.matched.length) {
      return { top: 0 };
    }
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 100,
          });
        }, 50);
      });
    }
    return { top: 0 };
  },
});

export default router;
