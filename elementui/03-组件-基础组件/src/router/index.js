import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Color from '@/components/Color'
import Typography from '@/components/Typography'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Link from '@/components/Link'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    },
    {
      path: '/color',
      name: 'Color',
      component: Color
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    }
  ]
})
