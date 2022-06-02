import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index'
import CaseList from '../views/CaseList'
import Maintain from '../views/Maintain'
import Software from '../views/Software'
import ContactUs from '../views/ContactUs'
import AboutUs from '../views/AboutUs'
import Move from '../views/Move'
import WeChat from '../views/WeChat'
import Mall from '../views/Mall'
import Website from '../views/Website'
import ITArticle from '../views/ITArticle'
import Process from '../views/Process'

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
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Move',
      name: 'Move',
      component: Move
    },
    {
      path: '/WeChat',
      name: 'WeChat',
      component: WeChat
    },
    {
      path: '/Mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/Website',
      name: 'Website',
      component: Website
    },
    {
      path: '/CaseList',
      name: 'CaseList',
      component: CaseList
    },
    {
      path: '/ITArticle',
      name: 'ITArticle',
      component: ITArticle
    },
    {
      path: '/Process',
      name: 'Process',
      component: Process
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
