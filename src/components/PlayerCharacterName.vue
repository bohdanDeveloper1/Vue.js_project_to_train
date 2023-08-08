<template>
  <div class="data">
    <h2>{{name}}</h2>
    <h3>{{email}}</h3>
    <p>Значення з дочірнього компонента: {{ childProp }}</p>
<!--    створюю подію при вписуванні даних-->
    <input type="text" @input="emitEventToParent">
  </div>
</template>

<script>
export default {
  name: "PlayerCharacterName",

  props: {
    name: String,

    childProp: String,

    email: {
      type: String,
      required: true,
      validator(value){
        return value.toLowerCase() === value;
      }
    },
  },

  data(){
    return{

    }
  },

  methods:{
    emitEventToParent: function (){
      // передаю подію childEvent до батьківсього компоненту
      this.$emit('childEvent', 'Hello from child!');
    }
  }
}
</script>

<style scoped>

</style>