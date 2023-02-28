

<template>
  <!-- <div class="base" v-for="item in Arr" :key="item">
    {{item.name}}
  </div> -->
  <!-- <HelloWorld></HelloWorld> -->
  <!-- <Watch></Watch> -->
  <index></index>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import Watch from './components/Watch.vue'
import index from './pages/index.vue'

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
