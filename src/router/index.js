import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/DatosUsuario',
    name: 'DatosUsuario',
    component: () => import('../views/DatosUsuario.vue')
  },
  {
    path: '/TomaPresion',
    name: 'TomaPresion',
    component: () => import('../views/TomaPresion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
