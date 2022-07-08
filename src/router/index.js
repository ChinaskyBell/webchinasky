import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  // base: '/web/',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import("../views/index")
      // component: resolve => require(['../views/index'], resolve)

    },
    {
      path: '/Maintain',
      name: 'Maintain',
      component: () => import("../views/Maintain")
    },
    {
      path: '/Software',
      name: 'Software',
      component: () => import("../views/Software")
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import("../views/ContactUs")
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: () => import("../views/AboutUs")
    },
    {
      path: '/App',
      name: 'App',
      component: () => import("../views/Move")
    },
    {
      path: '/WeChat',
      name: 'WeChat',
      component: () => import("../views/WeChat")
    },
    {
      path: '/Mall',
      name: 'Mall',
      component: () => import("../views/Mall")
    },
    {
      path: '/Website',
      name: 'Website',
      component: () => import("../views/Website")
    },
    {
      path: '/CaseList',
      name: 'CaseList',
      component: () => import("../views/CaseList")
    },
    {
      path: '/ITArticle',
      name: 'ITArticle',
      component: () => import("../views/ITArticle")
    },
    {
      path: '/Process',
      name: 'Process',
      component: () => import("../views/Process")
    },
    {
      path: '/Process/:pId',
      name: 'Process',
      component: () => import("../views/Process")
    },
    {
      path: '*',
      redirect: '/'
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
export default router

