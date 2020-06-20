<template>
  <v-col class="mx-auto">

    <v-form v-model="valid" @submit.prevent="onSubmit">


      <v-col
        cols="12"
        md="6"
        class="mx-auto"
      >
        <v-text-field
          v-model="form.title"
          :rules="titleRules"
          :counter="120"
          label="Title"
          required
          solo
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="mx-auto"
      >
        <v-textarea
          no-resize
          solo
          v-model="form.description"
          :rules="descriptionRules"
          :counter="200"
          label="Description"
          required
        ></v-textarea>
      </v-col>
      <v-col>
        <v-btn class="ma-2" tile outlined color="success">
          Add
          <v-icon right>mdi-plus-thick</v-icon>
        </v-btn>
      </v-col>


    </v-form>

  </v-col>

</template>

<script>
  export default {
    name: "my-form",
    data() {
      return {
        valid: false,
        form: {
          title: '',
          description: '',

        },
        titleRules: [
          v => !!v || 'title is required',
          v => v.length <= 120 || 'title must be less than 120 characters',
        ],
        descriptionRules: [
          v => !!v || 'description is required',
          v => v.length <= 200 || 'description must be less than 200 characters',
        ]
      }
    },
    methods: {
      onSubmit() {

      }
    }
  }

</script>

<style scoped>

</style>
