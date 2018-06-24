import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Test from '@/pages/test/Test'
import Head from '@/pages/head/Head'
import Tabs from '@/pages/tabs/Tabs'
import Collapse from '@/pages/collapse/Collapse'
import Button from '@/pages/button/Button'
import Dialog from '@/pages/dialog/Dialog'
import Table from '@/pages/table/Table'

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
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: Collapse
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})
