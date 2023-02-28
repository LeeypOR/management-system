<template>
  <div>
    case1: <input type="text" v-model="message">
    <hr>
  </div>
</template>

<script setup lang="ts">
import {watch,ref} from 'vue'
let message = ref<string>('yy')

watch(message,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})

</script>
<style>

</style>