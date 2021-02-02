<template>
  <button>
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      msg: "Hello world",
    };
  },
};
</script>

<style scoped>
button {
  color: red;
}
</style>
