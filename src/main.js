import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/css/style.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
