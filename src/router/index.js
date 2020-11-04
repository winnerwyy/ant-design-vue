import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')},
  {path: '/form', name: 'form', component: () => import(/* webpackChunkName: "form" */ '../views/FormDemo.vue')},
];

const router = new VueRouter({
  routes
});

export default router
