<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="marginTop">
      <router-view />
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'



  export default {
    components: {
      NavBar
    },



  }
</script>

<style scoped>
  .marginTop {
    margin-top: 5em;
  }
</style>>