<template>
  <v-card class="white lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-row row>
          <v-col xs4>
            <v-subheader>For User address</v-subheader>
          </v-col>
          <v-col xs8>
            <v-text-field v-model="userAddress"
              name="user-adress"
              label="User address"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn v-on:click.native="get" light default>Get</v-btn>
      </v-container>
    </v-card-text>

    <v-data-table
      v-bind:headers="headers"
      v-model="items"
      v-bind:search="search"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.item.index }}</td>
      <td class="text-xs-right">{{ props.item.terminal }}</td>
      <td class="text-xs-right">{{ props.item.date }}</td>
    </template>
    </v-data-table>

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
    snackbar: false,
    snackbarMessage: '',
    timeout: 10000,
    bottom: true,
    search: null,
    headers: [
      { text: 'Index', value: 'index' },
      { text: 'Terminal', value: 'terminal' },
      { text: 'Date', value: 'date' },
    ],
    items: [
    ],
  }),
  methods: {
    showSnackBar(message) {
      this.snackbarMessage = message;
      this.snackbar = true;
    },
    get() {
      web3.eth.defaultAccount = web3.eth.accounts[0];
      const validationCount = DTransportInstance.users(this.userAddress)[1].toNumber();
      this.items = [];
      for (let i = 0; i < validationCount; i += 1) {
        const data = DTransportInstance.getValidation(this.userAddress, i);
        this.items.push({
          index: i,
          terminal: data[1],
          date: (new Date((data[0] * 1000) + (2 * 60 * 60 * 1000))).toGMTString(),
        });
      }
    },
  },
};
</script>
