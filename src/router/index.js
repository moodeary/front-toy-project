import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/main/homeView.vue')
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: () => import('@/views/main/inboxView.vue')
    },
    {
      path: '/send',
      name: 'send',
      component: () => import('@/views/main/sendView.vue')
    },
    {
      path: '/delete',
      name: 'delete',
      component: () => import('@/views/main/deleteView.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/main/errorView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/main/settingsView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/main/feedbackView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/main/helpView.vue')
    }
  ]
})

export default router
