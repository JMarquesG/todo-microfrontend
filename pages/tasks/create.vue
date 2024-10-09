<template>
    <div>
      <h1>Create New Task</h1>
      <TaskForm @submit="createTask" />
      <nuxt-link to="/">Back to Tasks</nuxt-link>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import TaskForm from '~/components/TaskForm.vue';
  import { Task } from '~/types/Task';
  
  @Component({
    components: {
      TaskForm,
    },
  })
  export default class CreateTaskPage extends Vue {
    async createTask(taskData: { title: string; description?: string }) {
      try {
        await this.$axios.post<Task>('/tasks', taskData);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
  </script>
  