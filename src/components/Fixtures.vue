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

    for (let i = 0; i < 5; i += 1) {
      DTransportInstance.register({ from: web3.eth.accounts[i] });
    }

    const company = web3.eth.accounts[5];
    DTransportInstance.addCompany(company, 'CompanyName', { gas: 999999 });

    DTransportInstance.addTerminal(web3.eth.accounts[6], '9874', company, { gas: 999999 });
    DTransportInstance.addTerminal(web3.eth.accounts[7], '1234', company, { gas: 999999 });
    DTransportInstance.addTerminal(web3.eth.accounts[8], '42', company, { gas: 999999 });
  },
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
  },
};
</script>
