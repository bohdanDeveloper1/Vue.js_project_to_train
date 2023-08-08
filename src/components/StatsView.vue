<!--  Взаємодія з Vuex, висвітлює показники та предмети супергероя -->

<template>
  <div id="app">
    <h1>{{gameName}}</h1>
    Enter Your name: <input type="text" v-model="NameOFplayer" @input="addPlayerName">
    Your player name is: {{playerName}}
    <div class="hero">
      <ul class="list-group">
        <li class="list-group-item active">Postać <b>{{ user.name }}</b></li>
        <!--      @plus="plus('strength')" - наслуховую подію plus та передаю аргумент strength-->
        <!--      щоб звернутись потім за допомогою нього до конкретної вартості із store.state-->
        <li class="list-group-item">Siła: <b>{{user.strength}}</b> <StatsEditor @plus="plus('strength')" @minus="minus('strength')"/> </li>
        <li class="list-group-item">Szybkość: <b>{{user.speed}}</b>  <StatsEditor @plus="plus('speed')" @minus="minus('speed')"/> </li>
      </ul>
    </div>

    <div class="panel panel-info">
      <div class="panel-heading">
        Przedmioty
      </div>
      <ul class="list-group" v-for="(item, index) in getItems" :key="index">
        <li class="list-group-item active">Nazwa przedmiotu (Cena)</li>
        <li class="list-group-item"> {{item.name}} ({{item.value}})</li>
      </ul>
    </div>
  </div>
</template>

<script>
import StatsEditor from "@/components/StatsEditor.vue";
import {mapState} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "StatsView",
  components: {
    //  PlayerCharacter,
    StatsEditor,
  },

  data() {
    return {
      NameOFplayer: '',
    }
  },

  computed: {
    ...mapState(['user']),
    ...mapGetters(['getItems']),
    gameName(){
      return this.$store.state.gameName;
    },

    playerName(){
     return this.$store.state.playersName[0];
    },
    // items(){ - альтернатива   ...mapGetters(['getItems']),
    //   return this.$store.getters['getItems'];
    // },
  },

  methods:{
    // за допомогою commit звертаюсь до mutations зі $store
    //  за допомогою dispatch звертаюсь до actions зі $store
    plus(itemName){
      this.$store.dispatch('increment', itemName);
    },

    //  аргумент itemName - вказує на конкретну вартість із state
    minus(itemName){
      this.$store.commit('decrement', itemName);
    },

    addPlayerName() {
      let playerName = this.NameOFplayer;
      this.$store.commit('addPlayerName', playerName)
    }
  }
}
</script>

<style scoped>
.panel{
  margin-top: 50px;
}
</style>