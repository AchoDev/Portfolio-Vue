
import { createApp } from 'vue'

import * as VueRouter from 'vue-router';

import NotFound from './pages/NotFound.vue'
import AboutPage from './pages/about/AboutPage.vue'

import App from './App.vue'


const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  // {
  //   path: '/projects',
  //   component: undefined,
  // },
  // {
  //   path: '/ultra-tictactoe',
  //   component: undefined,
  // },
  // {
  //   path: '/kang2',
  //   component: undefined,
  // },
  // {
  //   path: '/ama',
  //   component: undefined,
  // },
  // {
  //   path: '/yo-masta-nag',
  //   component: undefined,
  // },
  // {
  //   path: '/youranimelist',
  //   component: undefined,
  // },
  // {
  //   path: '/am-launcher',
  //   component: undefined,
  // },
  // {
  //   path: '/banana-world',
  //   component: undefined,
  // },
  // {
  //   path: '/lumina',
  //   component: undefined,
  // },
  // {
  //   path: '/secret',
  //   component: undefined,
  // },
  {
    path: '/:notFound',
    component: NotFound,
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')