import { userStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/main/homeView.vue')
        },
        {
          path: '/medication',
          name: 'medicationView',
          component: () => import('@/views/main/medicationView.vue')
        },
        {
          path: '/vitamins',
          name: 'vitamins',
          component: () => import('@/views/main/vitaminsView.vue')
        },
        {
          path: '/hospital',
          name: 'hospital',
          component: () => import('@/views/main/hospitalView.vue')
        },
        {
          path: '/symptom',
          name: 'symptom',
          component: () => import('@/views/main/symptomView.vue')
        },
        {
          path: '/summary',
          name: 'summary',
          component: () => import('@/views/main/summaryView.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/views/main/settingsView.vue')
        },
        {
          path: '/member',
          name: 'member',
          component: () => import('@/views/main/memberView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/user/loginView.vue')
        },
        {
          path: '/signup',
          name: 'signup',
          component: () => import('@/views/user/signUp.vue')
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { getisLoggedIn } = userStore()
  if (to.fullPath === '/login' && getisLoggedIn()) {
    next('/')
  } else {
    next()
  }
})

export default router
