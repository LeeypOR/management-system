<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2023-11-17 09:46:00
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 21:05:59
 * @FilePath: /management-system/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <el-config-provider  :size="assemblySize" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
  
</template>

<script setup lang="ts">
import { onMounted, reactive, computed } from "vue";
import { useTheme } from "@/hooks/useTheme";
import { ElConfigProvider } from "element-plus";
import { useGlobalStore } from "@/store/modules/global";

const globalStore = useGlobalStore();

// init theme
const { initTheme } = useTheme();
initTheme();

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
const buttonConfig = reactive({ autoInsertSpace: false });

</script>

<style scoped>
/* body{
  width: 100%;
  height: 100%;
} */

</style>
