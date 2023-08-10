<template>
  <div class="error-container">
    <h1>Error 404</h1>
    <p>Page don`t exist</p>
    <router-link tag="button" :to="{name: 'home'}"><a class="btn btn-primary">Go to home page</a></router-link>
  </div>
</template>

<script>
export default {
  name: "Error404Page"
}
</script>

<style scoped>

</style>