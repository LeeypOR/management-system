<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2023-11-17 09:46:00
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-06 20:53:49
 * @FilePath: /management-system/src/components/Directive/Directive.vue
 * @Description: 可拖动组件
-->

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
  
  let moveElement:HTMLDivElement = el.firstElementChild as HTMLDivElement

  console.log(moveElement)
  const mouseDown = (e:MouseEvent) =>{
    
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e:MouseEvent) =>{
      console.log(e)
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }

    document.addEventListener('mousemove',move)
    document.addEventListener('mouseup',()=>{
      document.removeEventListener('mousemove',move)
    })

  }
  moveElement.addEventListener('mousedown',mouseDown)

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
