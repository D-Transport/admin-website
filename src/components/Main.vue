<template>
  <div id="main">
    <header-toolbar></header-toolbar>
    <div id="content">
      <blockquote> Registered Users :</blockquote>
      <user-table></user-table>
      <br>
      <blockquote> Terminals :</blockquote>
      <terminal-table></terminal-table>
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
import TerminalTable from './TerminalTable';


export default {
  created() {
    const coinbase = web3.eth.coinbase;
    web3.eth.defaultAccount = web3.eth.accounts[0];

    web3.eth.accounts.forEach((account) => {
      DTransportInstance.register({ from: account });
    });

    DTransportInstance.addTerminal('0xc2469c513ecaf8dd4c6ded6885c3924b5c6b5658', '651', '0xc2469c513ecaf8dd4c6ded6885c3924b5c6b5658');

    console.log(coinbase);
    console.log(DTransportInstance.register.call());
    console.log(DTransportInstance.users.call(coinbase));
    console.log(DTransportInstance.addTerminal.call(coinbase + 2, 50, coinbase));
  },
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
    'user-table': UserTable,
    'terminal-table': TerminalTable,
  },
};
</script>
