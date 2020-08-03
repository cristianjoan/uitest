import Vue from 'vue'
import VueRouter from 'vue-router'
import RuleOfThumb from '@/components/rule-of-thumb/rule-of-thumb'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RuleOfThumb',
    component: RuleOfThumb
  },
  {
    path: '/pasttrials',
    name: 'Past',
    component: RuleOfThumb
  },
  {
    path: '/howitworks',
    name: 'How',
    component: RuleOfThumb
  },
  {
    path: '/login',
    name: 'Login',
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
