import { createRouter, createWebHistory } from 'vue-router'
// import userStore from '@/stores/user.js'

// const { loginUser } = userStore()

// router.beforeEach((to, from, next) => {
//   // 로그인 사용자가 아닌 경우
//   if (to.fullPath === '/login' && loginUser()) {
//     next('/home') // 로그인 페이지로 리디렉션
//   } else {
//     next() // 로그인 페이지가 아니면 그대로 진행
//   }
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
})

export default router
