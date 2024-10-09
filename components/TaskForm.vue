<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model="formData.title"
          :class="{ 'is-invalid': titleError }"
        />
        <div v-if="titleError" class="invalid-feedback">{{ titleError }}</div>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="formData.description"
        ></textarea>
      </div>
      <button type="submit">{{ submitText }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Task } from '~/types/Task';

@Component
export default class TaskForm extends Vue {
  @Prop({ default: null }) readonly task!: Task | null;

  formData = {
    title: "",
    description: "",
  };

  titleError: string | null = null;

  get submitText() {
    return this.task ? "Update Task" : "Create Task";
  }

  created() {
    if (this.task) {
      // Assign values to formData properties individually
      this.formData.title = this.task.title;
      this.formData.description = this.task.description || "";
    }
  }

  validateForm() {
    if (!this.formData.title.trim()) {
      this.titleError = "Title is required.";
      return false;
    } else {
      this.titleError = null;
      return true;
    }
  }

  onSubmit() {
    if (this.validateForm()) {
      this.$emit("submit", { ...this.formData });
    }
  }
}
</script>

<style scoped>
.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
}
</style>
