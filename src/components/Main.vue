<template>
  <div id="main">
    <md-toolbar>
      <h1 class="md-title">D-Transport</h1>
    </md-toolbar>

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
import DTransport from '../DTransport';

console.log(DTransport);

const Web3 = require('web3');

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const coinbase = web3.eth.coinbase;
const balance = web3.eth.getBalance(coinbase);


console.log(balance);
</script>
