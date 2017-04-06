<template>
  <v-toolbar class="blue">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>D-Transport</v-toolbar-title>
    <v-toolbar-items class="hidden-md-and-down">
      <v-toolbar-item ripple>Balance : {{balance}}</v-toolbar-item>
      <v-toolbar-item ripple>Connected as : {{address}}</v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import web3 from '../config/web3';

export default {
  data: () => {
    const coinbase = web3.eth.coinbase;
    const balance = web3.eth.getBalance(coinbase);
    return {
      balance,
      address: coinbase,
    };
  },
};
</script>
