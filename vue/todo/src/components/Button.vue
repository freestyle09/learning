<template>
  <button>
    <!-- Children -->
    <slot />
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

<style scoped lang="scss">
button {
  color: var(--white-color);
  padding: 0.3rem 0.7rem;
  border: 2px solid var(--font-color);
  border-radius: 4px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-color: var(--font-color);
  &:hover {
    background-color: var(--white-color);
    color: var(--font-color);
  }
}
</style>
