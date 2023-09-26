import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedbackView from '../views/FeedbackView.vue'
import ToDoView from '../views/ToDoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDoView
    }
  ]
})

export default router
