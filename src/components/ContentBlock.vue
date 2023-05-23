<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class=""
            contain
            height="40"
        />
      </v-col>

      <Filters/>
      <UserList/>
      
    </v-row>
  </v-container>
</template>

<script>
import UserList from './UserList.vue';
import Filters from './Filters.vue';

  export default {
    name: 'ContentBlock',
    components: {
        UserList,
        Filters
    },

  }
</script>
