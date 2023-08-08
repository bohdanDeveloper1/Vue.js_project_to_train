<template>
  <div>
    <div class="animation-container">
      <div class="animation">
        <h2>Try animation</h2>
        <select class="form-control" v-model="animationOutType">
          <option>bounceOut</option>
          <option>bounceOutUp</option>
          <option>bounceOutLeft</option>
        </select>
        <button role="button" class="btn btn-primary" @click="animationActive = !animationActive">Animate element</button>
        <Transition name="transition"
                    enter-active-class="animate__animated animate__bounce"
                    :leave-active-class="outTypeAnimation">
          <p v-if="animationActive">Example</p>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationCssTrain",

  data(){
    return{
      animationActive: false,
      animationOutType: "",
    }
  },

  methods:{

  },

  computed:{
    outTypeAnimation(){
      return 'animate__animated animate__' + this.animationOutType;
    }
  }
}
</script>

<style scoped>
/*    звертаюсь до елемента через клас*/
/*.animate__animated{*/
/*!*тут пишу додаткові властивості наприклад:*!*/
/*!*  animation-duration: 2s;*!*/
/*}*/

    /*ПРИКЛАД ЯК ЗВЕРТАТИСЬ ДО ЕЛЕМЕНТА transition ЧЕРЕЗ CSS*/
/*.transition-enter-active{*/
/*  transition: opacity 1s ease-in-out; !* Плавна зміна прозорості протягом 1 секунди *!*/
/*  opacity: 0; !* Початкова прозорість елемента - 0 *!*/
/*}*/

/*.transition-enter {*/
/*  opacity: 0; !* При переході в стан "enter" елемент залишається невидимим *!*/
/*}*/

/*.transition-leave-active {*/
/*  transition: opacity 0.5s ease-in-out; !* Плавна зміна прозорості протягом 0.5 секунди при зникненні *!*/
/*  opacity: 0; !* Змінна прозорості елемента на 0 під час зникнення *!*/
/*}*/
</style>