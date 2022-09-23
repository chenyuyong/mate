import { createRouter, createWebHistory } from 'vue-router'
 
const routerHistory = createWebHistory()
 
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('../view/Home/index.vue')
    },
    {
      path: '/login',
      component: () => import('../view/User/Login.vue')
    }
  ]
})
export default router
 