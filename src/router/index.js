import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/LoginView.vue')
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'notfound',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
})

export default router
