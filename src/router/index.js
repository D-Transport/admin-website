import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Fixtures from '@/components/Fixtures';

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
    {
      path: '/fixtures',
      name: 'Fixtures',
      component: Fixtures,
    },
  ],
});
