import Vue from 'vue'
import VueRouter from 'vue-router'

import How from '@/views/How'
import Login from '@/views/Login'
import Past from '@/views/Past'
import RuleOfThumb from '@/components/rule-of-thumb/rule-of-thumb'
import Search from '@/views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RuleOfThumb',
    component: RuleOfThumb
  },
  {
    path: '/past',
    name: 'Past',
    component: Past
  },
  {
    path: '/how',
    name: 'How',
    component: How
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
