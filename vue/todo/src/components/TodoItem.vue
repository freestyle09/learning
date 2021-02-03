<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <p>
      <input
        type="checkbox"
        @change="markComplete"
        v-bind:checked="todo.completed"
      />
      {{ todo.title }}
      <Button class="del" @click="$emit('del-todo', todo.id)">X</Button>
    </p>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "TodoItem",
  components: { Button },
  props: ["todo"],
  data() {
    this.todo_data = this.todo;
  },
  methods: {
    markComplete() {
      this.todo_data.completed = !this.todo_data.completed;
    },
  },
};
</script>

<style scoped>
.todo-item {
  background-color: var(--todo-color);
  padding: 10px;
  border-bottom: 1px var(--border-color) dotted;
}
.del {
  background-color: var(--delete-color);
  color: #fff;
}
</style>
