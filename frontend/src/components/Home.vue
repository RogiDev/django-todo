<template>
  <v-container class="justify-center align-center text-center">
    <v-row>
      <my-form/>
    </v-row>
  <v-row>
      <tasks/>
    </v-row>

  </v-container>
</template>

<script>
  import Tasks from "./Tasks";
  import MyForm from "./Form";
  import AuthModule from "../store/modules/Auth.module";

  export default {
    name: 'Home',
    components: {
      MyForm,
      Tasks
    },
    data() {
      return {}
    },
    computed: {
      isUserAuth() {
        return this.$store.state.AuthModule.isAuth;
      },
      token() {
        return this.$store.state.AuthModule.jwt;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
