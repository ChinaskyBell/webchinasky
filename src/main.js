// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import i18n from './i18n'
import store from './common/store'
import tips from './common/tips'

// 輪播圖
// import 'swiper/swiper-bundle.css'
import Swiper,{Navigation,Autoplay,Thumbs} from 'swiper'
Swiper.use([Navigation,Autoplay,Thumbs])
// 驗證碼
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.use(SlideVerify)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  error: require('./assets/img/loding-error.jpg'),
  loading: require('./assets/img/loding.jpg'),
  attempt: 1,
  listenEvents: [ 'scroll' ]
})

// import '@/assets/css/common.css'
import '@/assets/css/icon/iconfont.css'
import '@/assets/css/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$tips = tips

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
