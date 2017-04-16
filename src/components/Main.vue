<template>
  <div id="main">
    <header-toolbar></header-toolbar>
    <div id="content">
      <blockquote> Registered Users :</blockquote>
      <user-table></user-table>
    </div>
    <my-footer></my-footer>
</div>
</template>


<style>
  #content {
    padding: 3em;
  }
</style>

<script>
import DTransportInstance from '../config/DTransport';
import web3 from '../config/web3';

import HeaderToolbar from './HeaderToolbar';
import Footer from './Footer';
import UserTable from './UserTable';


export default {
  created() {
    const coinbase = web3.eth.coinbase;
    web3.eth.accounts.forEach((account) => {
      DTransportInstance.register({ from: account });
    });
    console.log(coinbase);
    console.log(DTransportInstance.register.call());
    console.log(DTransportInstance.users.call(coinbase));
    console.log(DTransportInstance.addTerminal.call(coinbase + 2, 50, coinbase));
  },
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
    'user-table': UserTable,
  },
};
</script>
