<template>
  <div class="button-container">
 <p>{{ header }}</p>
    <p>{{gratulation}}</p>
  </div>
</template>

<script>
export default {
  name: "AuthorDetails",

  computed:{
    header(){
      return this.$route.query.lang === 'en' ? "author-details" : "detale autora";
    },

    gratulation(){
      if(this.$route.params.name === "Bob"){
        return 'success you find a main author';
      }else{
        return '';
      }
    },
  },



}
</script>

<style scoped>

</style>