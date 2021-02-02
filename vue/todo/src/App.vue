<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Siemanko" />
  <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Todos,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo one",
          completed: false,
        },
        {
          id: 2,
          title: "Todo two",
          completed: false,
        },
        {
          id: 3,
          title: "Todo three",
          completed: true,
        },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
:root {
  --font-color: #3f09aa;
  --header-font: Menlo, sans-serif;
  --todo-color: #f4f4f4;
  --border-color: #ccc;
  --delete-color: #ff0000;
}
.is-complete {
  text-decoration: line-through;
}
#app {
  font-family: var(--header-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
  margin-top: 60px;
}
</style>
