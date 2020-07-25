import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Paginate from 'vuejs-paginate';
import Preloader from "./components/Preloader";

Vue.component('Paginate', Paginate)
Vue.component('Preloader', Preloader)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
