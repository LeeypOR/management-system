<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-06 20:51:47
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 18:37:20
 * @FilePath: /management-system/src/components/SwitchDark/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-switch v-model="globalStore.isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @change="switchDark" />
</template>

<script setup lang="ts" name="SwitchDark">
import { useTheme } from "@/hooks/useTheme";
import { useGlobalStore } from "@/store/modules/global";
import { Sunny, Moon } from "@element-plus/icons-vue";

const { switchDark } = useTheme();
const globalStore = useGlobalStore();
</script>
