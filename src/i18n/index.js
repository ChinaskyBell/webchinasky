import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './lang/cn'
import en from './lang/en'
import tw from './lang/tw'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'tw',
  messages: {
    'cn': cn,
    'en': en,
    'tw': tw
  }
})
export default i18n
