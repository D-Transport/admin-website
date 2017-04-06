<template>
  <div id="main">
    <header-toolbar></header-toolbar>
    <div class="main-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores, atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas, officia excepturi.</p>
    </div>
  </div>
</template>


<style>
  .main-content {
    padding: 16px;
  }
</style>

<script>
 /* eslint-disable */
import DTransportInstance from '../config/DTransport';

console.log(DTransportInstance);

import HeaderToolbar from './HeaderToolbar.vue'

export default {
  components: {
    'header-toolbar': HeaderToolbar
  }
};
</script>
