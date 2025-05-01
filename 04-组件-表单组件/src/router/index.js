import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Radio from '@/components/Radio'
import CheckBox from '@/components/CheckBox'
import Input from '@/components/Input'
import InputNumber from '@/components/InputNumber'
import Select from '@/components/Select'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'CheckBox',
      component: CheckBox
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/inputNumber',
      name: 'InputNumber',
      component: InputNumber
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
