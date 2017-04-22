<template>
  <div id="main">
    <header-toolbar></header-toolbar>
    <div id="content">
      <h2>Fixtures loaded</h2>
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

export default {
  created() {
    web3.eth.defaultAccount = web3.eth.accounts[0];

    web3.eth.accounts.forEach((account) => {
      DTransportInstance.register({ from: account });
    });

    DTransportInstance.addTerminal('0xc2469c513ecaf8dd4c6ded6885c3924b5c6b5658', '987', '0xc2469c513ecaf8dd4c6ded6885c3924b5c6b5658', { gas: 999999 });
    DTransportInstance.addCompany('0xc2469c513ecaf8dd4c6ded6885c3924b5c6b5658', 'CompanyName', { gas: 999999 });
  },
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
  },
};
</script>
