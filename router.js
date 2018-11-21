import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/home'
import DemoPage from '~/pages/demoPage'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        meta: ['设置中心', '管理人员'],
        path: '/DemoPage',
        component: DemoPage
      }
    ]
  })
}