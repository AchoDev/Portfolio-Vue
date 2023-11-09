
import { createApp } from 'vue'

// import VueHead from 'vue-head'

import * as VueRouter from 'vue-router';

import NotFound from './pages/NotFound.vue'

import AboutPage from './pages/about/AboutPage.vue'
import ProjectPage from './pages/projects/ProjectsPage.vue'
import HomePage from './pages/home/HomePage.vue'

import UltraTictactoe from './pages/projects/UltraTictactoe.vue'

import App from './App.vue'


const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/projects',
    component: ProjectPage,
  },
  {
    path: '/ultra-tictactoe',
    component: UltraTictactoe,
  },
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