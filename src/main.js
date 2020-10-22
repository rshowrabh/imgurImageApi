import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App';
import store from './store';


Vue.use(VueRouter);



import {routes} from './routes'
  



export  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');