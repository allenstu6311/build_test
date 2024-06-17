import Vue from 'vue'
import App from './App.vue'
import router from "@/pages/router/co-router"

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
