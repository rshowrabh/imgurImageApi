<template>
  <div class="container">
      <appHeader/>
        <div class="container ui">
             <router-view></router-view>
        </div>
     
  </div>
</template>

<script>

import appHeader from './components/appHeader';

export default {
    name: 'App',
    components: {
        appHeader,
    }
}
</script>

<style>

</style>