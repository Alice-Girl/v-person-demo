import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const routes =[
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import("@/views/Home.vue")
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue")
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router