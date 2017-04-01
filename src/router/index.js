import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

Vue.use(Router);
Vue.use(VueMaterial);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});
