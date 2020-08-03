import Vue from 'vue'
import VueRouter from 'vue-router'
import RuleOfThumb from '@/components/rule-of-thumb/rule-of-thumb'
import How from '@/views/How'
import Past from '@/views/Past'
import Search from '@/views/Search'
import Login from '@/views/Login'

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
    component: Past
  },
  {
    path: '/howitworks',
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
