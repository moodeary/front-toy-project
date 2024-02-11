import { createRouter, createWebHistory } from 'vue-router'
import { isLogined } from '@/auth/index.js'

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
          component: () => import('@/views/main/homeView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/medication',
          name: 'medicationView',
          component: () => import('@/views/main/medicationView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/vitamins',
          name: 'vitamins',
          component: () => import('@/views/main/vitaminsView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/hospital',
          name: 'hospital',
          component: () => import('@/views/main/hospitalView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/symptom',
          name: 'symptom',
          component: () => import('@/views/main/symptomView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/summary',
          name: 'summary',
          component: () => import('@/views/main/summaryView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/views/main/settingsView.vue'),
          meta: { unauthorized: true }
        },
        {
          path: '/member',
          name: 'member',
          component: () => import('@/views/main/memberView.vue'),
          meta: { unauthorized: true }
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

router.beforeEach((to, from, next) => {
  // ============================================
  //                DEBUG용 로그
  // ============================================
  // console.log('--TO', to)
  // console.log('login_user : ', Cookies.get('login_user'))
  // console.log('token : ', Cookies.get('token'))

  if (!to.matched.some((record) => record.meta.unauthorized)) {
    return next()
  }

  if (!isLogined()) {
    return next('/login')
  }

  return next()
})

export default router
