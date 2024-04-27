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
      path: '/TrashQueens',
      name: 'TrashQueens',
      component: () => import('../views/_TrashQueens.vue')
    },
    {
      path: '/CodeSnippet',
      name: 'CodeSnippet',
      component: () => import('../views/_CodeSnippet.vue')
    },
    {
      path: '/Cibo',
      name: 'Cibo',
      component: () => import('../views/_Cibo.vue')
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
