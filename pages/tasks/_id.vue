<template>
  <div v-if="task">
    <h1>{{ task.title }}</h1>
    <p>{{ task.description }}</p>
    <p><strong>Created At:</strong> {{ formattedDate }}</p>
    <nuxt-link :to="`/tasks/edit/${task.id}`">Edit</nuxt-link>
    <button @click="deleteTask">Delete</button>
    <nuxt-link to="/">Back to Tasks</nuxt-link>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { Task } from "~/types/Task";
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class TaskDetailPage extends Vue {
  task: Task | null = null;

  get formattedDate() {
    return this.task ? new Date(this.task.createdAt).toLocaleString() : "";
  }

  async fetch() {
    try {
      const { id } = this.$route.params;
      const response = await this.$axios.get<Task>(`/tasks/${id}`);
      this.task = response.data;
    } catch (error) {
      console.error(error);
      this.$router.push("/");
    }
  }

  async deleteTask() {
    if (!this.task) return;

    if (confirm("Are you sure you want to delete this task?")) {
      try {
        await this.$axios.delete(`/tasks/${this.task.id}`);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
