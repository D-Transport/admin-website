<template>
  <v-card class="white lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-row row>
          <v-col xs4>
            <v-subheader>User address</v-subheader>
          </v-col>
          <v-col xs8>
            <v-text-field v-model="userAddress"
              name="user-adress"
              label="User address"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row row>
          <v-col xs4>
            <v-subheader>Terminal address</v-subheader>
          </v-col>
          <v-col xs8>
            <v-text-field v-model="terminalAddress"
              name="terminal-adress"
              label="Terminal address"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn v-on:click.native="get" light default>Get</v-btn>
      </v-container>
    </v-card-text>
    <v-snackbar :timeout="timeout" :bottom="bottom" v-model="snackbar">
     {{snackbarMessage}}
   <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
 </v-snackbar>
  </v-card>
</template>


<script>
import DTransportInstance from '../config/DTransport';
import web3 from '../config/web3';

export default {
  created() {

  },
  data: () => ({
    userAddress: '',
    terminalAddress: '',
    snackbar: false,
    snackbarMessage: '',
    timeout: 10000,
    bottom: true,
  }),
  methods: {
    showSnackBar(message) {
      this.snackbarMessage = message;
      this.snackbar = true;
    },
    get() {
      web3.eth.defaultAccount = web3.eth.accounts[0];
      const result = DTransportInstance.getAuthorizationDate(this.userAddress,
          this.terminalAddress, { gas: 99999 }).toNumber();
      if (result === 1) {
        this.showSnackBar('No user');
      } else if (result === 2) {
        this.showSnackBar('No authorization');
      } else {
        this.showSnackBar((new Date((result * 1000) + (2 * 60 * 60 * 1000))).toGMTString());
      }
    },
  },
};
</script>
