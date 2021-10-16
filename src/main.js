import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from "moment"
import store from './store/index'
import ContentLoader from './components/ContentLoader.vue'
import ContentLoaderForecast from './components/ContentLoaderForecast.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.component('Loader', ContentLoader)
Vue.component('LoaderForecast', ContentLoaderForecast)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
