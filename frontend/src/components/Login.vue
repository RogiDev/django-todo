<template>
  <v-col class="mx-auto my-auto">
    <v-form v-model="valid" @submit.prevent="onSubmit()">
      <v-container>
        <v-card>
          <v-toolbar
            color="primary"
            dark

          >
            <v-toolbar-title class="mx-auto">Login Page</v-toolbar-title>
          </v-toolbar>
          <v-spacer></v-spacer>
          <v-col
            cols="12"
            md="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.email"
              :rules="rules"
              :counter="120"
              label="E-Mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="password"
              label="Password"
              hint="At least 6 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <v-row>
            <v-container class="text-center ">
              <v-btn tile color="success" class="mx-3" type="submit">
                Login
                <v-icon right>mdi-login</v-icon>
              </v-btn>


              <v-btn tile color="primary" @click="registerBtn">
                Register
                <v-icon right>mdi-account-plus</v-icon>
              </v-btn>
            </v-container>
          </v-row>

        </v-card>


      </v-container>
    </v-form>
  </v-col>
</template>

<script>
  import AuthModule from "../store/modules/Auth.module";

  export default {
    name: "login",
    data() {
      return {
        show: false,
        valid: false,
        form: {
          email: '',
          password: ''
        },

        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        }
      }
    },
    methods: {
      registerBtn() {
        this.$router.push('register');
      },
      onSubmit() {
        this.$store.dispatch('loginUser', this.form);


      }
    }
  }
</script>

<style scoped>

</style>
