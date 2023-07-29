import Vue from 'vue'
import App from './App.vue'

// відповідає за тип зборки (development or production)
Vue.config.productionTip = false

 // монтує Vue до елементу із id app in HTML
new Vue({
  render: h => h(App),
}).$mount('#app')
