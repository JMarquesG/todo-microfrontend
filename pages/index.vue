<template>
  <div>
    <h1>Tasks</h1>
    <nuxt-link to="/tasks/create">Create New Task</nuxt-link>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <nuxt-link :to="`/tasks/${task.id}`">{{ task.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Task } from '~/types/Task';
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
  tasks: Task[] = [];

  async fetch() {
    try {
      const response = await this.$axios.get<Task[]>('/tasks');
      this.tasks = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
