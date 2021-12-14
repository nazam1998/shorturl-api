import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
