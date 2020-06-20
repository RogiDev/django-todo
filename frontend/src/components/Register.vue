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
              v-model="form.firstName"
              :rules="rules"
              label="First Name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="mx-auto"
          >
            <v-text-field
              v-model="form.lastName"
              :rules="rules"
              label="Last Name"
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
              hint="At least 8 characters"
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
              v-model="form.passwordAgian"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              name="passwordAgian"
              label="Password Confirm"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>

          <v-row>
            <v-container class="text-center ">
              <v-btn tile color="success" class="mx-3">
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
          passwordAgian: '',
          firstName: '',
          lastName: '',
          email: ''
        },

        emailRules: [
          v => !!v || 'Required',
          v => v.length <= 255 || 'must be less than 255 characters',
        ],
        passwordRules: [
          value => !!value || 'Require.',
          v => v.length >= 8 || 'Min 8 characters',
        ]
      }
    },
    methods:{
        onSubmit(){
          this.$store.dispatch()
        }
    }
  }
</script>

<style scoped>

</style>
