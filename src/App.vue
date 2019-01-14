<template>
  <div id="app">
    <Nav />
    <DebtsView />
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  import DebtsView from "./components/DebtsView";
  export default {
    name: 'App',
    components: {DebtsView, Nav}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
