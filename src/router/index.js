import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Test from '@/pages/test/Test'
import coveTabs from '@/pages/tabs/Tabs'
import coveHead from '@/pages/head/head'

Vue.use( Router )

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    },*/
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test/:id',
      name: 'test',
      component: Test
    },
    {
      path: '/head',
      name: 'head',
      component: coveHead
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: coveTabs
    }
  ]
})
