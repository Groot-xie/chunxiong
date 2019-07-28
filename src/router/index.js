import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Index from '@/page/main'
import About from '@/page/about'
import AboutUs from '@/page/about/about-us'
import Culture from '@/page/about/culture'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/',
        component: Index
      }, {
        path: '/about',
        component: About,
        redirect: '/about/about-us',
        children: [{
          path: '/about/about-us',
          component: AboutUs
        }, {
          path: '/about/culture',
          component: Culture
        }]
      }]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
  ]
})
