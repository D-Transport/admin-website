<template>
  <md-toolbar>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">D-Transport</h2>
    <h3 class="md-title" style="flex: 1">Balance : 21231 ETH</h3>
    <h3 class="md-title" style="flex: 1">Connected as 0x1651651651654654151</h3>

  </md-toolbar>
</template>

<script>
import DTransportInstance from '../config/DTransport';
import web3 from '../config/web3';

const coinbase = web3.eth.coinbase;
const balance = web3.eth.getBalance(coinbase);
console.log(balance);
console.log(DTransportInstance);

export default {

};
</script>
