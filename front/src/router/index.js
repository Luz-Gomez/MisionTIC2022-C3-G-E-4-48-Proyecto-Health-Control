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
    path: '/DatosMedico',
    name: 'DatosMedico',
    component: () => import('../views/DatosMedico.vue')
  },
  {
    path: '/TomaPresion',
    name: 'TomaPresion',
    component: () => import('../views/TomaPresion.vue')
  },
  {
    path: '/ConsultaTomaPresion',
    name: 'ConsultaTomaPresion',
    component: () => import('../views/ConsultaTomaPresion.vue')
  },
  {
    path: '/IniciarSesion',
    name: 'IniciarSesion',
    component: () => import('../views/IniciarSesion.vue')
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
