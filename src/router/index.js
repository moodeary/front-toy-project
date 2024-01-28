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
      path: '/Outbox',
      name: 'Outbox',
      component: () => import('@/views/main/outboxView.vue')
    },
    {
      path: '/Trash',
      name: 'Trash',
      component: () => import('@/views/main/trashView.vue')
    },
    {
      path: '/Spam',
      name: 'Spam',
      component: () => import('@/views/main/spamView.vue')
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: () => import('@/views/main/settingsView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/main/feedbackView.vue')
    },
    {
      path: '/Help',
      name: 'Help',
      component: () => import('@/views/main/helpView.vue')
    }
  ]
})

export default router
