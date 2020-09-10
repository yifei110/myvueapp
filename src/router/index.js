import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Footer from '../components/Footer.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import(/* webpackChunkName: "base" */ '../views/home/index.vue'),
      foot: Footer
    }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: () => import(/* webpackChunkName: "base" */ '../views/kind/index.vue'),
      foot: Footer
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import(/* webpackChunkName: "base" */ '../views/cart/index.vue'),
      foot: Footer
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import(/* webpackChunkName: "base" */ '../views/user/index.vue'),
      foot: Footer
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import(/* webpackChunkName: "base" */ '../views/user/index.vue')
    }
  },
  {
    // 如果没有底部，则也可以不写 components，也可以写成  component，但是只写default
    path: '/register', name: 'register', component: () => import(/* webpackChunkName: "user" */ '../views/register/index.vue')
  },
  {
    // 如果没有底部，则也可以不写 components，也可以写成  component，但是只写default
    path: '/detail/:proid', name: 'detail', component: () => import(/* webpackChunkName: "user" */ '../views/detail/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
