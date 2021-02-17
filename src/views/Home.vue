<template>
  <h2 v-if="user">You are in Home  {{user}}</h2>
  <h2 v-if="!user">You are not in Home  {{user}}</h2>

</template>

<script>
export default {
  name: "Home" ,
  props: ['user']
}
</script>

<style scoped>

</style>