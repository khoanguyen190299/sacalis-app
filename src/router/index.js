import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Lesson from '../views/Lesson.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/lesson',
  //   name: 'lesson',
  //   component: Lesson
  // },
  {
    path: '/lesson',
    name: 'lesson',
    component: () => import('../views/Lesson.vue')
  },
  {
    path: '/workshop',
    name: 'workshop',
    component: () => import('../views/Workshop.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
