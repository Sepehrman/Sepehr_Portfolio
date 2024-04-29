import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/Wiibid',
      name: 'Wiibid',
      component: () => import('../views/_Wiibid.vue')
    },
    {
      path: '/Gouken',
      name: 'Gouken',
      component: () => import('../views/_Gouken.vue')
    },
    {
      path: '/LastBlast',
      name: 'LastBlast',
      component: () => import('../views/_LastBlast.vue')
    },
    {
      path: '/TrustingPixels',
      name: 'TrustingPixels',
      component: () => import('../views/_TrustingPixels.vue')
    },
    {
      path: '/WordTrack',
      name: 'WordTrack',
      component: () => import('../views/_WordTrack.vue')
    },
    {
      path: '/Suez',
      name: 'Suez',
      component: () => import('../views/_Suez.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to.hash)
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
