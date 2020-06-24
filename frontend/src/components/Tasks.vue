<template>
  <v-container>
  <v-col cols="12" md="6"
         v-for="task in tasks"
         class="d-flex flex-column justify-center text-center align-content-center align-center mx-auto my-20">
    <v-card

      max-width="800"
      width="500"
      :key="task.id"
    >

      <v-card-actions>
        <v-btn
          icon
          color="red"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <v-btn icon color="lime darken-2">
          <v-icon>
            mdi-file-edit
          </v-icon>
        </v-btn>

        <v-btn icon color="green">
          <v-icon>mdi-check</v-icon>
        </v-btn>

      </v-card-actions>
      <h2 class="text-center">{{task.title}}</h2>
      <v-card-subtitle>{{dateTask}}</v-card-subtitle>

      <v-card-text class="text-center">
        {{task.description}}
      </v-card-text>
    </v-card>
  </v-col>
    </v-container>
</template>

<script>
  import TaskModule from "../store/modules/Task.module";
  import moment from 'moment';

  export default {
    name: "tasks",
    computed: {
      tasks() {
        return this.$store.state.TaskModule.tasks;
      },
      dateTask() {
        return moment(this.tasks.forEach(task => task)).format('DD.MM.YYYY HH:mm')
      }
    },
    created() {
      this.$store.dispatch('fetchTasks');

    }
  }
</script>

<style scoped>

</style>
