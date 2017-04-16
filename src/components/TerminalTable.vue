<template>
  <v-data-table
    v-bind:headers="headers"
    v-model="items"
    v-bind:search="search"
    hide-actions
    class="elevation-1"
  >
  <template slot="items" scope="props">
    <td>{{ props.item.index }}</td>
    <td class="text-xs-right">{{ props.item.address }}</td>
    <td class="text-xs-right">{{ props.item.creationDate }}</td>
    <td class="text-xs-right">{{ props.item.location }}</td>
    <td class="text-xs-right">{{ props.item.company }}</td>
  </template>
  </v-data-table>
</template>

<script>
import DTransportInstance from '../config/DTransport';

export default {
  created() {
    const terminalCount = DTransportInstance.getTerminalCount().toNumber();
    for (let i = 0; i < terminalCount; i += 1) {
      const data = DTransportInstance.getTerminal(i);
      this.items.push({
        index: i,
        address: data[0],
        creationDate: data[1],
        location: data[2],
        company: data[3],
      });
    }
  },
  data: () => ({
    search: null,
    headers: [
      { text: 'Index', value: 'Place' },
      { text: 'Address', value: 'address' },
      { text: 'Creation Date', value: 'creationDate' },
      { text: 'Location', value: 'location' },
      { text: 'Company', value: 'company' },
    ],
    items: [
    ],
  }),
};
</script>
