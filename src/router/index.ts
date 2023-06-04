import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('../App.vue')
const Home = () => import('../views/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/inicial',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router