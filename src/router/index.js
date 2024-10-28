import { createRouter, createWebHistory } from 'vue-router'
import Setting from '../views/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
    },
  ],
})

export default router
