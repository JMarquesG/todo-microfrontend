<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Title:</label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        required
        :class="{ invalid: titleError }"
      />
      <span v-if="titleError" class="error">{{ titleError }}</span>
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea id="description" v-model="formData.description"></textarea>
    </div>
    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Task } from "~/types/Task";

@Component
export default class TaskForm extends Vue {
  @Prop({ type: Object, default: null }) readonly task!: Task | null;

  formData = {
    title: "",
    description: "",
  };

  titleError: string | null = null;

  get submitText() {
    return this.task ? "Update Task" : "Create Task";
  }

  mounted() {
    if (this.task) {
      this.formData.title = this.task.title;
      this.formData.description = this.task.description || "";
    }
  }


  onSubmit() {
      this.$emit("submit", { ...this.formData });
  }
}
</script>

<style scoped>
.error {
  color: red;
}

.invalid {
  border-color: red;
}
</style>
