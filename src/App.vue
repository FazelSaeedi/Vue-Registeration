<template>

  <div id="app">
    <Nav  />
  </div>



</template>

<script>
// eslint-disable-next-line no-unused-vars
import Nav from "@/components/Nav";

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
