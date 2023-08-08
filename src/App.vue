<template>
  <div id="app">
      <AnimationCssTrain/>
  </div>
</template>

<script>
// локально імпортую компонент PlayerCharacter (тільки до App.vue)
//import StatsView from "@/components/StatsView.vue";
import AnimationCssTrain from "@/components/AnimationCssTrain.vue";

export default {
  name: 'App',
  components: {
    AnimationCssTrain,
  },

  data() {
    return {

    }
  },

  
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