<template>
  <div id="main">
    <header-toolbar></header-toolbar>
    <div id="content">
      <blockquote> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</blockquote>
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
import HeaderToolbar from './HeaderToolbar';
import Footer from './Footer';

console.log(DTransportInstance);

export default {
  components: {
    'header-toolbar': HeaderToolbar,
    'my-footer': Footer,
  },
};
</script>
