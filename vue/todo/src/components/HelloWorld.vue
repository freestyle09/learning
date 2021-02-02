<template>
  <!--  One children-->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <Button msg="Dodaj"></Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "HelloWorld",
  components: {Button},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2rem;
  color: var(--font-color);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
