<template>
  <div class="index"> 
    <header>
      这是父组件
    </header>
    <Teleport to="body">
      <Children1 :data="data"></Children1>
    </Teleport>
    <div>
      
    </div>
  </div>
</template>


<script setup lang="ts">
import Children1 from '../components/Children1.vue'
import {reactive} from 'vue'

interface Tree {
  name:string,
  checked:boolean,
  children?:Tree[]
}

const data = reactive<Tree[]>([
  {
    name:'1',
    checked:false,
  },
  {
    name:'2',
    checked:false,
    children:[
      {
        name:'2-1',
        checked:false
      },
      {
        name:'2-2',
        checked:false
      },
    ]
  },
  {
    name:'3',
    checked:false,
    children:[
      {
        name:'3-1',
        checked:false
      },
      {
        name:'3-2',
        checked:false
      },
      {
        name:'3-3',
        checked:true,
        children:[
          {
            name:'3-3-1',
            checked:false
          }
        ]
      },
    ]
  }
])
</script>

<style  scoped>
  .index{
    border: 1px solid #000;
    width: 100%;
    height: 100%;
  }
</style>