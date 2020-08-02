import Vue from 'vue'
import VueRouter from 'vue-router'
import RuleOfThumb from '@/components/rule-of-thumb/rule-of-thumb'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RuleOfThumb
  },
  {
    path: '/search',
    name: 'Search',
    component: RuleOfThumb
  }
]

const router = new VueRouter({
  routes
})

export default router
