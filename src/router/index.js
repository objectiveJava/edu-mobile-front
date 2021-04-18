import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  // 首页
  {
    path: '/',
    name: 'course',
    component: () => import(/* webpackChunkName: 'course' */'@/views/course/index')
  },
  // 学习页
  {
    path: '/learn',
    name: 'learn',
    component: () => import(/* webpackChunkName: 'learn' */'@/views/learn/index')
  },
  // 用户页
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'user' */'@/views/user/index')
  },
  // 课程详情页
  {
    path: '/course-info/:courseId/',
    name: 'course-info',
    component: () => import(/* webpackChunkName: 'course-info' */'@/views/course-info/index'),
    props: true
  },
  // 视频页
  {
    path: '/lesson-video/:lessonId/',
    name: 'lesson-video',
    component: () => import(/* webpackChunkName: 'lesson-video' */'@/views/course-info/video'),
    props: true
  },
  // 支付页
  {
    path: '/pay/:courseId/',
    name: 'pay',
    component: () => import(/* webpackChunkName: 'pay' */'@/views/pay/index'),
    meta: { requiresAuth: true },
    props: true
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
