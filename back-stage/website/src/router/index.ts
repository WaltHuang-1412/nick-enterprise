import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/dashboard/index.vue'
export const routesName = {
  dashboard: 'dashboard',
  'ci-cd': 'ci-cd',
  'ci-cd-qat': 'ci-cd-qat',
  'ci-cd-qat-setting-tickets': 'ci-cd-qat-setting-tickets',
  'ci-cd-qat-deployment-information': 'ci-cd-qat-deployment-information',
  'ci-cd-qat-deploy': 'ci-cd-qat-deploy',
  'ci-cd-qat-list-apps': 'ci-cd-qat-list-apps',
  'ci-cd-qat-list-nginx': 'ci-cd-qat-list-nginx',
  'ci-cd-qat-fluent-id': 'ci-cd-qat-fluent-id',
  'ci-cd-qat-list-static-file': 'ci-cd-qat-list-static-file',
  'ci-cd-stg': 'ci-cd-stg',
  'ci-cd-prod': 'ci-cd-prod',
  'ci-cd-preprod': 'ci-cd-preprod',
  login: 'login'
}
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesName.dashboard,
    component: Dashboard,
    meta: {
      layout: 'LayoutDefault'
    }
  },
  {
    path: '/ci-cd',
    name: routesName['ci-cd'],
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/ci-cd/index.vue'),
    meta: {
      layout: 'LayoutDefault'
    },
    children: [
      {
        path: 'qat',
        name: routesName['ci-cd-qat'],
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/ci-cd/qat/index.vue'),
        children: [
          {
            path: 'setting-tickets',
            name: routesName['ci-cd-qat-setting-tickets'],
            component: () =>
              import(
                /* webpackChunkName: "about" */ '@/views/ci-cd/qat/setting-tickets.vue'
              )
          },
          {
            path: 'deployment-information',
            name: routesName['ci-cd-qat-deployment-information'],
            component: () =>
              import(
                /* webpackChunkName: "about" */ '@/views/ci-cd/qat/setting-tickets.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: routesName.login,
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
    meta: {
      layout: 'LayoutLogin'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
