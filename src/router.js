import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Game from './views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
