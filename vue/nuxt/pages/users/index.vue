<template>
  <div>
    <h1>Select user</h1>
    <input type="text" v-model="userId" @change="onLoadUser" />
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    },
  },
};
</script>

<style scoped></style>
