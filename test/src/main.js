import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import 'lib-flexible'
import './assets/js/autoComponent'
// 引入 v5 样式
import '@ektx/v5/dist/v5.css'

import v5Alert from '@ektx/v5/src/global/alert'

Vue.config.productionTip = false
Vue.prototype.$v5Alert = v5Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
