<template>
  <div class="index"> 
    <header>
      这是父组件
    </header>
    <body>
      <Children1></Children1>
    </body>
  </div>
</template>


<script setup lang="ts">
import Children1 from '../components/Children1.vue'
</script>

<style  scoped>
  .index{
    border: 1px solid #000;
    width: 100%;
    height: 100%;
  }
</style>