import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  // 全局参数
  state: {
    token: '',
    languageName: '' || localStorage.getItem('locale')
  },
  // set方法，保存数据
  mutations: {
    set_languageName (state, languageName) {
      state.languageName = languageName
      localStorage.setItem('locale', languageName)
    }
  },
  // 暂时用不上
  actions: {
  },
  // get方法
  getters: {
  },
  // 自定义为给全局变量分组，需要提前声明其他store文件，然后引入这里
  modules: {
    // setDemoValue(state, demoValue) {
    //   state.demoValue = demoValue
    // }
  }
})
export default store
