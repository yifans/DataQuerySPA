import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Status from '@/components/body/Status'
import Help from '@/components/body/Help'
import Historical from '@/components/body/Historical'
import Analysis from '@/components/body/Analysis'
import Alarm from '@/components/body/Alarm'

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
      redirect: '/status',
      component: Home,
      children: [
        {
          path: '/status',
          name: 'Operation Status',
          component: Status
        },
        {
          path: '/help',
          name: 'Help Page',
          component: Help
        },
        {
          path: '/historical',
          name: 'Historical Data',
          component: Historical
        },
        {
          path: '/analysis',
          name: 'Data Analysis',
          component: Analysis
        },
        {
          path: '/alarm',
          name: 'Alarm',
          component: Alarm
        }
      ]
    }
  ]
})
