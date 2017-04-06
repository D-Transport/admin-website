import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

import Vuetify from 'vuetify';

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});
