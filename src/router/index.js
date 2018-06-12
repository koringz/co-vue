import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Test from '@/pages/test/Test'
import Head from '@/pages/head/Head'
import Tabs from '@/pages/tabs/Tabs'

Vue.use( Router )

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test/:id',
      name: 'test',
      component: Test
    },*/
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/head',
      name: 'head',
      component: Head
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    }
  ]
})
