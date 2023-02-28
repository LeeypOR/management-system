<template>
  <div class="index"> 
    {{ name }}
  </div>
</template>


<script setup lang="ts">
// import Children1 from '../components/Children1.vue'
// import TransitionTest from '../components/TransitionTest.vue'
// import Directive from '../components/Directive.vue'
// import {reactive,ref} from 'vue'

// interface Tree {
//   name:string,
//   checked:boolean,
//   children?:Tree[]
// }
// let flag = ref(true)
// const data = reactive<Tree[]>([
//   {
//     name:'1',
//     checked:false,
//   },
//   {
//     name:'2',
//     checked:false,
//     children:[
//       {
//         name:'2-1',
//         checked:false
//       },
//       {
//         name:'2-2',
//         checked:false
//       },
//     ]
//   },
//   {
//     name:'3',
//     checked:false,
//     children:[
//       {
//         name:'3-1',
//         checked:false
//       },
//       {
//         name:'3-2',
//         checked:false
//       },
//       {
//         name:'3-3',
//         checked:true,
//         children:[
//           {
//             name:'3-3-1',
//             checked:false
//           }
//         ]
//       },
//     ]
//   }
// ])
const data = reactive({
  name:'yyy'
})
</script>

<style lang="less"  scoped>
  
</style>