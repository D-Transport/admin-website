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
    <td class="text-xs-right">{{ props.item.name }}</td>
    <td class="text-xs-right">{{ props.item.location }}</td>
  </template>
  </v-data-table>
</template>

<script>
import DTransportInstance from '../config/DTransport';

export default {
  created() {
    const companyCount = DTransportInstance.getCompanyCount().toNumber();
    for (let i = 0; i < companyCount; i += 1) {
      const data = DTransportInstance.getCompany(i);
      this.items.push({
        index: i,
        address: data[0],
        creationDate: data[1],
        name: data[2],
        location: data[3],
      });
    }
  },
  data: () => ({
    search: null,
    headers: [
      { text: 'Index', value: 'index' },
      { text: 'Address', value: 'address' },
      { text: 'Creation Date', value: 'creationDate' },
      { text: 'Name', value: 'name' },
      { text: 'location', value: 'location' },
    ],
    items: [
    ],
  }),
};
</script>
