import Vue from 'vue'
import App from './App.vue'
import './plugins'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/css/element-ui-styles.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
