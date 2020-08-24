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
      },
      {
        path: '/patientRecord/:cc',
        name: 'patientRecord',
        component:() => import('./components/PatientRecord.vue')
      },
      {
        path: '/folderLayout/:id',
        name: 'folderLayout',
        component:() => import('./components/FolderLayout.vue')
      }
    ]
})