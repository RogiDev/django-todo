<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="d-flex justify-center align-content-center text-center align-center"
    >

        <h2 class="">Todo App</h2>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
    }
  }
};
</script>
