import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import 'lib-flexible'
import './assets/js/autoComponent'
// 引入 v5 组件
import v5 from '@ektx/v5'
// 引入 v5 样式
import '@ektx/v5/dist/v5.css'

Vue.use(v5)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
