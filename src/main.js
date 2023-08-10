import Vue from 'vue'
import App from './App.vue'
import store from './store'; // імпортуємо створений стор
import router from './router'
//глобально імпортую компонент GlobalButton
// import GlobalButton from "@/components/GlobalButton.vue";

// відповідає за тип зборки (development or production)
Vue.config.productionTip = false

//глобально імпортую компонент GlobalButton (до всього проекту)
// Vue.component('global-button', GlobalButton);

// монтує Vue до елементу із id app in HTML
new Vue({
  render: (h) => h(App),
  router,

  // додаємо стор до опцій Vue
  store
}).$mount('#app');
