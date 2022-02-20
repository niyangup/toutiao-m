import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login'
import Layout from '@/views/layout/layout'
import home from '@/views/layout/home/home'
import qa from '@/views/layout/qa/qa'
import video from '@/views/layout/video/video'
import mine from '@/views/layout/mine/mine'
import Search from '@/views/search/search'
import Article from '@/views/article/article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'qa',
        name: 'qa',
        component: qa
      },
      {
        path: 'video',
        name: 'video',
        component: video
      },
      {
        path: 'mine',
        name: 'mine',
        component: mine
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: Article,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
