<template>

  <v-col class="mx-auto my-auto">

    <v-form v-model="valid" @submit.prevent="onSubmit">
      <v-container>
        <v-card>
          <v-toolbar
            color="primary"
            dark
          >
            <v-toolbar-title class="mx-auto">Register Page</v-toolbar-title>
          </v-toolbar>
          <v-col
            cols="12"
            md="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.username"
              :rules="emailRules"
              :counter="255"
              label="Username"
              name="username"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              :counter="255"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.first_name"
              :rules="rules"
              label="First Name"
              name="first_name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.last_name"
              :rules="rules"
              label="Last Name"
              name="last_name"
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
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              name="password"
              label="Password"
              hint="At least 6 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.password_again"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              name="password_again"
              label="Password Confirm"
              hint="At least 6 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>

          <v-row>
            <v-container class="text-center ">
              <v-btn tile color="success" type="submit" class="mx-3">
                Register
                <v-icon right>mdi-plus-thick</v-icon>
              </v-btn>

            </v-container>
          </v-row>
        </v-card>
      </v-container>
    </v-form>
  </v-col>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        show: false,
        valid: false,
        form: {
          username: '',
          password: '',
          password_again: '',
          first_name: '',
          last_name: '',
          email: ''
        },

        emailRules: [
          v => !!v || 'Required',
          v => v.length <= 255 || 'must be less than 255 characters',
        ],
        passwordRules: [
          value => !!value || 'Require.',
          v => v.length >= 6 || 'Min 6 characters',
        ]
      }
    },
    methods:{
        onSubmit(){
          this.$store.dispatch('registerUser',this.form)
        }
    }
  }
</script>

<style scoped>

</style>
