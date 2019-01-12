import Vue from 'vue'
import Router from 'vue-router'
import DebtsView from '@/components/DebtsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DebtsView',
      component: DebtsView
    }
  ]
})
