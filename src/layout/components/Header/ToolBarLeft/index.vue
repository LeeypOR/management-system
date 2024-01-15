<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 19:21:20
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 21:18:17
 * @FilePath: /management-system/src/layout/components/Header/ToolBarLeft/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='tool-bar-left'>
    <CollapseIcon/>
    <Breadcrumb/>
  </div>
</template>

<script setup   name=''>
import {useGlobalStore} from "@/store/modules/global"
import CollapseIcon from '../components/CollapseIcon.vue';
import Breadcrumb from '../components/Breadcrumb.vue';

const globalStore = useGlobalStore();


</script>
<style scoped lang="scss">
 .tool-bar-left {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
</style>