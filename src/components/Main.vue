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
      <blockquote> GiveAuthorization :</blockquote>
      <give-authorization-form></give-authorization-form>
      <blockquote> GetAuthorizationDate :</blockquote>
      <get-authorization-date-form></get-authorization-date-form>
      <blockquote> Validate :</blockquote>
      <validate-form></validate-form>
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
import HeaderToolbar from './HeaderToolbar';
import Footer from './Footer';
import UserTable from './UserTable';
import TerminalTable from './TerminalTable';
import CompanyTable from './CompanyTable';
import GiveAuthorization from './GiveAuthorization';
import GetAuthorizationDate from './GetAuthorizationDate';
import Validate from './Validate';

export default {
  created() {
  },
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
    'user-table': UserTable,
    'terminal-table': TerminalTable,
    'company-table': CompanyTable,
    'give-authorization-form': GiveAuthorization,
    'get-authorization-date-form': GetAuthorizationDate,
    'validate-form': Validate,
  },
};
</script>
