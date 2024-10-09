<template>
  <div>
    <h1>Edit Task</h1>
    <TaskForm v-if="task" :task="task" @submit="updateTask" />
    <nuxt-link v-if="task" :to="`/tasks/${task.id}`">Back to Task</nuxt-link>
    <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TaskForm from "~/components/TaskForm.vue";
import { Task } from "~/types/Task";

@Component({
  components: {
    TaskForm,
  },
})
export default class EditTaskPage extends Vue {
  task: Task | null = null;

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

  async updateTask(taskData: { title: string; description?: string }) {
    if (!this.task) return;

    try {
      await this.$axios.put<Task>(`/tasks/${this.task.id}`, taskData);
      this.$router.push(`/tasks/${this.task.id}`);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
