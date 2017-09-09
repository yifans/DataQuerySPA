import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Status from '@/components/body/Status'
import Help from '@/components/body/Help'
import Historical from '@/components/body/Historical'
import Analysis from '@/components/body/Analysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/status',
          name: 'Status',
          component: Status
        },
        {
          path: '/help',
          name: 'Help',
          component: Help
        },
        {
          path: '/historical',
          name: 'historical',
          component: Historical
        },
        {
          path: '/analysis',
          name: 'analysis',
          component: Analysis
        }
      ]
    }
  ]
})
