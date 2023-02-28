<template>
  <div class="index"> 
    <header>
      这是父组件
    </header>
    <!-- <Teleport to="body">
      
    </Teleport> -->
    <div>
      <!-- <Children1 :data="data"></Children1> -->
    </div>

    <div class="content">
      <button @click="flag = !flag">切换</button>
      <transition name="fade">
        <div class="box" v-if="flag"></div>
      </transition>
    </div>
  </div>
</template>


<script setup lang="ts">
import Children1 from '../components/Children1.vue'
import {reactive,ref} from 'vue'

interface Tree {
  name:string,
  checked:boolean,
  children?:Tree[]
}
let flag = ref(true)
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
    text-align: left;
  }
  .content{
    width: 400px;
    height: 300px;
    
  }
  .box{
    width: 100px;
    height: 100px;
    background: red;
  }
  .fade-enter-from{
    /* 进入之前 */
    width: 0;
    height: 0;
  }
  .fade-enter-active{
    /* 过度曲线 */
    transition:all 1.5s ease;

  }
  .fade-enter-to{
    width: 100px;
    height: 100px;
  }
  .fade-leave-from{
    width: 100px;
    height: 100px;
  }
  .fade-leave-active{
    transition:all 3s ease-in-out;
  }
  .fade-leave-to{
    width: 0;
    height: 0;
  }
</style>