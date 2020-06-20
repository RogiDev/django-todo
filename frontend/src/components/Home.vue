<template>
  <v-container class="justify-center align-center text-center">
    <v-row>
      <my-form />
    </v-row>
    <v-row>
       <tasks />
    </v-row>

  </v-container>
</template>

<script>
import Tasks from "./Tasks";
import MyForm from "./Form";

  export default {
    name: 'Home',
    components: {
      MyForm,
      Tasks
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">

</style>
