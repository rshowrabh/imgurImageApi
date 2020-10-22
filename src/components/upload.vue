<template>
  <div>
      <h1>Upload item</h1>
      <div class="dropper">
        <input @change="uploadImages($event.target.files)" type="file" accept="image/*" multiple>
      <span>Drag file here</span>
      </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name:'upload',
    methods: {
      ...mapActions(['uploadImages'])
    }
}
</script>

<style scoped>

  .dropper:hover{
    background: grey;
  }
  .dropper{
    height: 30vh;
    border: 2px solid #000;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  input{
    height: 30vh;
    position: absolute;
    width: 100%;
    opacity: 0;
  }
</style>