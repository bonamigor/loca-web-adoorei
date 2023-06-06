import { createRouter, createWebHistory } from 'vue-router';

const Index = () => import('../App.vue')
const Home = () => import('../views/Home.vue')
const SelectPlan = () => import('../views/SelectPlan.vue')
const Cadastro = () => import('../views/Cadastro.vue')

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
  },
  {
    path: '/selecionar-plano',
    name: 'SelectPlan',
    component: SelectPlan
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router