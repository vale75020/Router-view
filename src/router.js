import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Team from './views/Team.vue'
import Company from './views/Company.vue'

Vue.use(Router)

export default new Router({
  routes: [ // associations components/routes
    {
      path: '/',  // url d'access
      name: 'home',  // nom de la route , pas le path
      component: Home  // component
    },
    {
      path: '/about',
      name: 'about',
      // lazy loading 
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
      {
        path: 'company',  //nested views il faut pas mettre '/' devant
        name: 'aboutCompany',
        component: Company
      },
      {
        path: 'team',
        name: 'aboutTeam',
        component: Team
      }
      ]
    },
    {
      path:'/login',
      name:'login',
      component: Login
    }
  ]
})
