// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import i18n from './i18n'
import store from './common/store'

import 'swiper/swiper-bundle.css'
import Swiper,{Navigation,Autoplay,Thumbs} from 'swiper'
Swiper.use([Navigation,Autoplay,Thumbs])

import '@/assets/css/icon/iconfont.css'
import '@/assets/css/animate.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
