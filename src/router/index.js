import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Index from '@/page/main'
// 关于纯雄
import About from '@/page/about'
import AboutUs from '@/page/about/about-us'
import Culture from '@/page/about/culture'
// 资源中心
import ResourceCenter from '@/page/resource-center'
import ProductIndexes from '@/page/resource-center/product-indexes'
import ProductDefinition from '@/page/resource-center/product-definition'
// 产品中心
import ProductCenter from '@/page/product-center'
import ProductPipe from '@/page/product-center/pipe'
import ProductSection from '@/page/product-center/section'
import ProductBoard from '@/page/product-center/board'
import ProductFirefighting from '@/page/product-center/firefighting'
// 纯雄服务
import ServiceCenter from '@/page/service-center'
import WarehouseLogistics from '@/page/service-center/warehouse-logistics'
import MachiningCenter from '@/page/service-center/machining-center'
import ServicePromise from '@/page/service-center/service-promise'
import CustomerService from '@/page/service-center/customer-service'
// 人力资源
import Manpower from '@/page/manpower'
import Recruitment from '@/page/manpower/recruitment'
import TrainingSystem from '@/page/manpower/training-system'
import JoinUs from '@/page/manpower/join-us'
// 联系我们
import Contact from '@/page/contact'
import ContactUs from '@/page/contact/contact-us'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: Index
        },
        {
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
        },
        {
          path: '/resource',
          component: ResourceCenter,
          redirect: '/resource/product-indexes',
          children: [{
            path: '/resource/product-indexes',
            component: ProductIndexes
          }, {
            path: '/resource/product-definition',
            component: ProductDefinition
          }]
        },
        {
          path: '/product',
          component: ProductCenter,
          redirect: '/product/pipe',
          children: [{
            path: '/product/pipe',
            component: ProductPipe
          }, {
            path: '/product/section',
            component: ProductSection
          }, {
            path: '/product/board',
            component: ProductBoard
          }, {
            path: '/product/firefighting',
            component: ProductFirefighting
          }]
        },
        {
          path: '/service',
          component: ServiceCenter,
          redirect: '/service/warehouse-logistics',
          children: [{
            path: '/service/warehouse-logistics',
            component: WarehouseLogistics
          }, {
            path: '/service/machining-center',
            component: MachiningCenter
          }, {
            path: '/service/service-promise',
            component: ServicePromise
          }, {
            path: '/service/customer-service',
            component: CustomerService
          }]
        },
        {
          path: '/manpower',
          component: Manpower,
          redirect: '/manpower/recruitment',
          children: [{
            path: '/manpower/recruitment',
            component: Recruitment
          }, {
            path: '/manpower/training-system',
            component: TrainingSystem
          }, {
            path: '/manpower/join-us',
            component: JoinUs
          }]
        },
        {
          path: '/contact',
          component: Contact,
          redirect: '/contact/contact-us',
          children: [{
            path: '/contact/contact-us',
            component: ContactUs
          }]
        }
      ]
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
