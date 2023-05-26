import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/guideline',
    name: 'Guideline',
    component: () => import('../doc/Guideline.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../doc/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
