import Vue from 'vue'
import App from './App.vue'
import './plugins'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/css/element-ui-styles.scss'
import '@/assets/css/base.scss'
import i18n from './i18n'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
