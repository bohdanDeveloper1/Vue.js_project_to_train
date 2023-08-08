<template>
  <div class="form row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label"><slot name="email"></slot></label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label"><slot name="password"></slot></label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleOfSlots"
}
</script>

<style scoped>

</style>