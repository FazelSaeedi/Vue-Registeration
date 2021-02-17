<template>

  <div id="app">
    <Nav  />
  </div>

  <div class="container-fluid" >
    <div class="row vertical-center">
      <form class="mainContent col-xs-8 col-xs-offset-2  col-sm-6 col-sm-offset-3 col-md-4 col-sm-offset-4 col-lg-2 col-lg-offset-5">
        <router-view  />
      </form>
    </div>
  </div>

</template>

<script>
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
.vertical-center {
  display: flex;
  align-items: center;
  min-height: 100vh;

}
.mainContent{
  margin-left: auto;
  margin-right: auto;
}
</style>
