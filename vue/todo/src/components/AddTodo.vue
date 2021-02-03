<template>
  <form @submit="addTodo">
    <label>
      Dodaj zadanie
      <input
        type="text"
        name="title"
        v-model="title"
        id="title"
        placeholder="Add todo..."
      />
    </label>
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import Button from "@/components/Button";
import { v4 } from "uuid";

export default {
  name: "AddTodo",
  components: { Button },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: v4(),
        title: this.title,
        completed: false,
      };
      console.log(newTodo);
      this.title = "";
      this.$emit("add-todo", newTodo);
    },
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  margin: 0.3rem;
  gap: 1rem;
}
label {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;
}
input {
  padding: 0.3rem 0.7rem;
  flex-grow: 1;
}
</style>
