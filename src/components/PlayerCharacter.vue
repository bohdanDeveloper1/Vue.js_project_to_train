<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <!-- Слухаємо подію 'childEvent' та викликаємо метод handleChildEvent якщо вона спрацьовує -->
      <PlayerCharacterName :name = "playerName" :email="email" :childProp="parentData" @childEvent="handleChildEvent"/>
    </div>
    <div class="panel-body">
      Player name: <input type="text" v-model="playerName"> <br>
      Email: <input type="email" v-model="email">
    </div>
    <div>
      <button class="btn-access" @click="checkData">Send</button>
      <p id="access"></p>
    </div>
    <p>Значення з батьківського компонента: {{ parentData }}</p>

    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>

<script>
import PlayerCharacterName from "@/components/PlayerCharacterName.vue";
export default {
  name: "PlayerCharacter",

  components: {
    PlayerCharacterName,
  },

  data() {
    return{
      playerName: '',
      email: '',
      parentData: 'Hello from Parent',
    }
  },

  methods:{
    checkData: function (){
      if(this.email === ''){
        window.alert('uncorrect email')
      }else{
        let accessMassage = document.getElementById('access')
        accessMassage.innerHTML = 'your data was send';
      }
    },

    // викоикаю подію
    handleChildEvent: function (dataFromChild){
      console.log('Подія з дочірнього компонента:', dataFromChild)
    }

  }

}
</script>

<style scoped>
  .btn-access{
    margin-top: 15px;
  }
</style>