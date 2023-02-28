<template>
  <div v-move class="box">
    <div class="header"></div>
    <div>
      内容
    </div>
  </div>
</template>

<script setup lang="ts">

import {Directive,DirectiveBinding} from 'vue'

const vMove:Directive<any,void> = (el:HTMLElement,binding:DirectiveBinding) =>{
  console.log(el.firstElementChild,binding)
  // let moveElement:HTMLDivElement = el.firstElementChild
}

</script>




<style lang='less'>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  .header {
    height: 20px;
    background: black;
    cursor: move;
  }
}
</style>
