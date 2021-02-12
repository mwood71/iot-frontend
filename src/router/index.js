import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import('../views/Devices.vue'),

  },
  {
    path: '/usage',
    name: 'Usage',
    component: () => import('../views/Usage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})




router.beforeEach(async(to, from, next) => {
  try {
    var user = ""
    if (user == null && to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  } catch (e) {
    next('/login')
  }

})



export default router
