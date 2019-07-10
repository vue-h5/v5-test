import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import 'lib-flexible'
import './assets/js/autoComponent'
import veeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(veeValidate)
Validator.localize('zh', zh_CN)

import v5Alert from '@ektx/v5/src/global/alert'
import v5Button from '@ektx/v5/lib/components/button'
// 按需引用全局注册
Vue.component(v5Button.name, v5Button)

Vue.config.productionTip = false
Vue.prototype.$v5Alert = v5Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
