<template>
  <div>
<!--    @click="$emit('plus')  -  створення події plus після кліку -->
    <span class="glyphicon glyphicon-plus" aria-hidden="true" @click="$emit('plus')"> + </span>
    <span class="glyphicon glyphicon-minus" aria-hidden="true" @click="$emit('minus')"> - </span>
  </div>
</template>

<script>
export default {
  name: "StatsEditor"
}
</script>

<style scoped>
  div{
    padding-left: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .glyphicon{
    cursor: pointer;
  }

  .glyphicon-plus{
    color: green;
  }

  .glyphicon-minus{
    color: red;
    margin-left: 6px;
  }
</style>