import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index'
import Test from '../views/Test'
import Maintain from '../views/Maintain'
import Software from '../views/Software'
import ContactUs from '../views/ContactUs'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Maintain',
      name: 'Maintain',
      component: Maintain
    },
    {
      path: '/Software',
      name: 'Software',
      component: Software
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ],
  // 跳转后页面置顶
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {x: 0, y: 0}
    }
  }
})
