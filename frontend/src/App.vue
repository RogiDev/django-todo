<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="d-flex justify-space-between align-content-center text-center align-center"
    >

        <h2 class="">Todo App</h2>
        <v-spacer>
        </v-spacer>

       <template v-if=" this.$router.currentRoute.path !== '/login' &&  this.$router.currentRoute.path !== '/register' " v-slot:extension>
        <v-tabs align-with-title>

          <v-tab @click="logout">logout</v-tab>
        </v-tabs>
      </template>
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
  },
  computed:{
    isAuth(){
      return this.$store.getters.isAuth;
    },
    token(){
      return this.$store.getters.token;
    }
  },
  methods:{
      logout(){
        this.$store.dispatch('logoutUser').then(res =>
          this.$router.push('/login')
        )
      }
    }
};
</script>
