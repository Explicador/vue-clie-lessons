import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/seie-cv/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
