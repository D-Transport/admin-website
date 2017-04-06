<template>
  <md-toolbar>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">D-Transport</h2>
    <h3 class="md-title" style="flex: 1">Balance : {{balance}} ETH</h3>
    <h3 class="md-title" style="flex: 1">Connected as {{address}}</h3>

  </md-toolbar>
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
