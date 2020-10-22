<template>
  <div class="">
      <div class="ui clearing segment">
  <h3 class="ui left floated header">
    Imagur App
    <div id="loading"></div>
  </h3>
  <h3 class="ui right floated header">
    
   <a v-if="!isLoggedIn" href="#" @click='login'>Login</a>

   <div class="" v-else>
     <router-link to='/gallary' class="item" >Gallary</router-link>
     <router-link to='/upload' class="item" >Upload</router-link>
     <a class="item" href="#" @click='logout'>Logout</a>
   </div>
   
  </h3>
</div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'appHeader',
    methods: {
      ...mapActions(['login', 'logout'])
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
}
</script>

<style scoped>
  .item{
    margin: 10px;
    display: inline-block;
  }
</style>