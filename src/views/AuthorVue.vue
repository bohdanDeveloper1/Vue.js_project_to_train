<template>
    <div class="card">
      <div class="card-header">
        <b>Information about author</b>
      </div>
      <div class="card-body">
        <p>author name is: {{name}} </p>
        <router-link tag="button" :to="{name: 'author-details', params: {name: this.name}, query: {lang: 'en'}}"><a class="btn btn-primary">See details</a></router-link> &nbsp;
        <router-link tag="button" :to="{name: 'author-details', params: {name: this.name}, query: {lang: 'pl'}}"><a class="btn btn-primary">Zobać detale</a></router-link>
        <hr>
        <router-view/>
        <button role="button" class="btn btn-primary" @click="backToHome">Back to Home</button>
      </div>
    </div>
</template>

<script>

export default {
  name: "AuthorVue",
  // приймаю name з index.js
  props:{
    name:{
      type: String
    },
  },

  methods:{
    // заміняю поточний компонент на компонент home
    backToHome(){
      this.$router.replace({name: 'home'});
    }
  }
}
</script>

<style scoped>
.card{
  margin-top: 50px;
}
</style>