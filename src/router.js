import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
      {
        path: '/',
        name: 'login',
        component: () => import('./components/Login.vue')
      },
      {
        path: '/home',
        name: 'home',
        component:() => import('./components/Home.vue')
      }
    ]
})