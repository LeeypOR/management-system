<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 19:26:58
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 19:34:27
 * @FilePath: /management-system/src/layout/components/Header/components/CollapseIcon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-icon class="collapse-icon" @click="changeCollapse">
    <component :is="globalStore.isCollapse ? 'expand' : 'fold'"></component>
  </el-icon>
</template>

<script setup lang="ts" name="collapse">
import { useGlobalStore } from "@/store/modules/global";

const globalStore = useGlobalStore();
const changeCollapse = () =>
  globalStore.setGlobalState("isCollapse", !globalStore.isCollapse);
</script>
<style scoped lang="scss">
.collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
