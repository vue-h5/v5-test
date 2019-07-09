import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import 'lib-flexible'
import './assets/js/autoComponent'
// 引入 v5 样式
// import '@ektx/v5/dist/v5.css'
import veeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(veeValidate)
Validator.localize('zh', zh_CN)

import v5Alert from '@ektx/v5/src/global/alert'

Vue.config.productionTip = false
Vue.prototype.$v5Alert = v5Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
