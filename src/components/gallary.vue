<template>
  <div>
      <h1>Gallary item</h1>
  <div class="image-container" v-if="isLoggedIn" >
  
      <img  v-for="image in allImages" :key="image.id" :src="image.link">
    
  </div>
  <div v-else>
    <h1>Please login to continue</h1>
  </div>

 
  </div>

  
</template>

<script>

import {mapActions, mapGetters } from 'vuex';

export default {
    name:'gallary',
    methods: {
      ...mapActions(['fetchImages']),
    },
    created(){
      this.fetchImages();
    },
    computed: {
      ...mapGetters(['allImages', 'isLoggedIn'])
    },
}
</script>

<style scoped>
  .image-container{
    column-count: 3;
    column-gap: 0;
  }
  img{
    max-width: 100%;
    padding: 5px;
  }
</style>