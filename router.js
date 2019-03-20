import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Partner',
      name: 'Partner',
      component: () => import('./views/Partner')
    },
    {
      path: '/Impressum',
      name: 'Impressum',
      component: () => import('./views/Impressum')
    },
    {
      path: '/Rabatte',
      name: 'GetDiscount',
      component: () => import('./views/GetDiscount')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
