import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'
import '@/assets/css/style.css'
import vuetify from './plugins/vuetify';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEENfyRkHLnZ_IXjztGxdjCgLuAPMJDNA",
    authDomain: "photocheck-c908b.firebaseapp.com",
    databaseURL: "https://photocheck-c908b.firebaseio.com",
    projectId: "photocheck-c908b",
    storageBucket: "photocheck-c908b.appspot.com",
    messagingSenderId: "685525345962",
    appId: "1:685525345962:web:c44ef4506d039100cfd2d3",
    measurementId: "G-NXZBKH9KPB"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//firebase.analytics();

export {fb, db, firebase}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,

  // mounted(){
  //   fetch()
  //   .then(response=>response.json())
  //   .then(data=>{
  //   })
  // }
  render: h => h(App)
}).$mount('#app')
