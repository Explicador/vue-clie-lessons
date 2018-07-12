import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/seie-cv/Index'
import FullPortfolio from '@/components/seie-full-portfolio/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/seie-full-portfolio',
      name: 'FullPortfolio',
      component: FullPortfolio
    }
  ],
  mode: 'history'
})
