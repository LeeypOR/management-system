<template>
  <div class="children1">
    
    <div v-for="item in data">
      <input type="checkbox" v-model="item.checked"> <span>{{ item.name }}</span>
      <Children1 v-if="item?.children?.length" :data="item?.children"></Children1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

defineProps<{
  data?:Tree[]
}>()
</script>

<style>
  .children1{
    width: 100px;
    float:right;
  }
</style>