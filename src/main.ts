
import { createApp } from 'vue'

// import VueHead from 'vue-head'

import * as VueRouter from 'vue-router';

import NotFound from './pages/NotFound.vue'

import AboutPage from './pages/about/AboutPage.vue'
import ProjectPage from './pages/projects/ProjectsPage.vue'
import HomePage from './pages/home/HomePage.vue'
import BlogPage from './pages/blog/BlogPage.vue'

import UltraTictactoe from './pages/projects/pages/UltraTictactoe.vue'
import AmA from './pages/projects/pages/AmA.vue';
import Kang2 from './pages/projects/pages/Kang2.vue'
import YoMastaNag from './pages/projects/pages/YoMastaNag.vue'
import YOURAnimeList from './pages/projects/pages/YOURAnimeList.vue'
import PicoTerm from './pages/projects/pages/PicoTerm.vue'
import AMLauncher from './pages/projects/pages/AMLauncher.vue'
import BananaWorld from './pages/projects/pages/BananaWorld.vue'
import Lumina from './pages/projects/pages/Lumina.vue'
import Secret from './pages/projects/pages/Secret.vue'

import App from './App.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Home',
    }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      title: 'About',
    }
  },
  {
    path: '/blog',
    component: BlogPage,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/blog/:title',
    component: BlogPage,
    props: true,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/projects',
    component: ProjectPage,
    meta: {
      title: 'Projects',
    }
  },
  {
    path: '/ultra-tictactoe',
    component: UltraTictactoe,
    meta: {
      title: 'Ultra TicTacToe',
    }
  },
  {
    path: '/kang2',
    component: Kang2,
    meta: {
      title: 'Kang2',
    }
  },
  {
    path: '/ama',
    component: AmA,
    meta: {
      title: 'AmA',
    }
  },
  {
    path: '/yo-masta-nag',
    component: YoMastaNag,
    meta: {
      title: 'Yo-Masta-Nag',
    }
  },
  {
    path: '/youranimelist',
    component: YOURAnimeList,
    meta: {
      title: 'YOURAnimeList',
    }
  },
  {
    path: '/pico-term',
    component: PicoTerm,
    meta: {
      title: 'Pico-Term',
    }
  },
  {
    path: '/am-launcher',
    component: AMLauncher,
    meta: {
      title: 'AchoMatico-Launcher',
    }
  },
  {
    path: '/banana-world',
    component: BananaWorld,
    meta: {
      title: 'Banana World',
    }
  },
  {
    path: '/lumina',
    component: Lumina,
    meta: {
      title: 'Lumina Engine',
    }
  },
  {
    path: '/secret',
    component: Secret,
    meta: {
      title: 'Secret...',
    }
  },
  {
    path: '/:notFound',
    component: NotFound,
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})


router.beforeEach((to) => {
  document.title = to.meta.title as string || 'Not Found';
});

const app = createApp(App)

app.use(router)
app.mount('#app')