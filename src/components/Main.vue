<template>
  <div id="main">
    <header-toolbar></header-toolbar>
    <div id="content">
      <blockquote> Registered Users :</blockquote>
      <user-table></user-table>
      <br>
      <blockquote> Terminals :</blockquote>
      <terminal-table></terminal-table>
      <br>
      <blockquote> Companies :</blockquote>
      <company-table></company-table>
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
// import DTransportInstance from '../config/DTransport';
// import web3 from '../config/web3';

import HeaderToolbar from './HeaderToolbar';
import Footer from './Footer';
import UserTable from './UserTable';
import TerminalTable from './TerminalTable';
import CompanyTable from './CompanyTable';


export default {
  created() {

  },
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
    'user-table': UserTable,
    'terminal-table': TerminalTable,
    'company-table': CompanyTable,
  },
};
</script>
