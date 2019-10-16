import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import QueryCode from '@/components/QueryVerificationCode'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/QueryCode',
      name:'QueryCode',
      component: QueryCode
    }
  ]
})
