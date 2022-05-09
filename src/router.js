import Vue from 'vue';
import Router from 'vue-router';
 import HomePage from './components/homePage'
 import aboutUs from './components/aboutUsPage'
 import userPage from './components/userProfile'


Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'homePage',
      component: HomePage

    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: userPage
    }
  ]

});