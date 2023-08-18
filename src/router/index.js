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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddRestaurantView.vue')
    },
    {
      path: '/update',
      name: 'update',
      component: () => import('../views/UpdateRestaurantView.vue')
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'notfound',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
})

export default router
