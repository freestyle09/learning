<template>
  <div>
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Header from "@/components/layout/Header";
import AddTodo from "@/components/AddTodo";
import axios from "axios";

export default {
  name: "App",
  components: {
    AddTodo,
    Header,
    Todos,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((resp) => (this.todos = resp.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
:root {
  --font-color: #3f09aa;
  --header-font: Muli, sans-serif;
  --todo-color: #f4f4f4;
  --border-color: #ccc;
  --delete-color: #ff0000;
  --white-color: #fff;
}
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--header-font);
  text-rendering: optimizeLegibility;
}
.is-complete {
  text-decoration: line-through;
}
</style>
