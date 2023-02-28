<template>
  <div class="content">
    <input v-model="num.current" type="number" step="20" class="input">
  </div>
  <div>
    {{ num.tweenedNumber }}
  </div>
</template>

<script setup lang="ts">
import {reactive,watch} from 'vue'
import gsap from 'gsap'

const num = reactive({
  current:0,
  tweenedNumber:0
})

watch(()=>num.current,(newVal,oldVal)=>{
  gsap.to(num,{
    tweenedNumber:newVal,
    duration:1
  })
})
</script>

<style>
.input{
  height: 50px;
  width: 300px;
  font-size: 30px;
}
</style>