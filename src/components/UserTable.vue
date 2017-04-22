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
    <td class="text-xs-right">{{ props.item.validationCount }}</td>
  </template>
  </v-data-table>
</template>

<script>
import DTransportInstance from '../config/DTransport';

export default {
  created() {
    const usersCount = DTransportInstance.getUsersCount().toNumber();
    for (let i = 0; i < usersCount; i += 1) {
      const data = DTransportInstance.getUser(i);
      this.items.push({
        index: i,
        address: data[0],
        creationDate: (new Date((data[1] * 1000) + (2 * 60 * 60 * 1000))).toGMTString(),
        validationCount: data[2],
      });
    }
  },
  data: () => ({
    search: null,
    headers: [
      { text: 'Index', value: 'Place' },
      { text: 'Address', value: 'address' },
      { text: 'Creation Date', value: 'creationDate' },
      { text: 'Validation Count', value: 'validationCount' },
    ],
    items: [
    ],
  }),
};
</script>
