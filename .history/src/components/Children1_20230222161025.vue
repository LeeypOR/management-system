<template>
  <div class="children1">
    这是子组件
    <div v-for="item in data">
      <input type="checkbox" v-model="item.checked"> <span>{{ item.name }}</span>
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