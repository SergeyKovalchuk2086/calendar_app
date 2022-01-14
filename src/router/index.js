import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '@/components/Calendar'
import LayoutMain from '@/layouts/LayoutMain'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
