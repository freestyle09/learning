<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox" @change="markComplete" />
      {{ todo.title }}
      <button class="del" @click="$emit('del-todo', todo.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
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
}
</style>
