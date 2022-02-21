<template>
  <div>
    <router-view></router-view>
    <Navigation />
  </div>
  
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  margin: 0 auto;
  margin-top: 0px;
  width: 100%;
}
html {
  background: #798776;
  margin: 0;
}
body {
  margin: 0;
}
</style>
