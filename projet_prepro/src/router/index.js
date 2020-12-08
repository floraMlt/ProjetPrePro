import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AuthSignUp from '../views/AuthSignUp.vue'
import AuthSignIn from '../views/AuthSignIn.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signUp',
    name: 'AuthSignUp',
    component: AuthSignUp
  },
  {
    path: '/signIn',
    name: 'AuthSignIn',
    component: AuthSignIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '*',
    name: 'default',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router