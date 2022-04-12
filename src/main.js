// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'swiper/swiper-bundle.css'
import Swiper,{Navigation,Autoplay,Thumbs} from 'swiper'
Swiper.use([Navigation,Autoplay,Thumbs])

import '@/assets/css/icon/iconfont.css'
import '@/assets/css/animate.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
