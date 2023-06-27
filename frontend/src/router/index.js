import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index.js'
import Cookies from 'js-cookie'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('store.state', store.state)

  let token = Cookies.get()
  console.log('tokenxx', token)

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (store.state.auth.user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
