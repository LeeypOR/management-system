<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 16:38:41
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 22:55:38
 * @FilePath: /management-system/src/layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <component :is="LayoutComponents[layout]"></component>
    <ThemeDrawer/>
</template>

<script setup lang='ts'>
import { computed, type Component} from 'vue'
import { useRoute } from 'vue-router';
import LayoutClassic from './LayoutClassic/index.vue';
import {useGlobalStore} from "@/store/modules/global"
import ThemeDrawer from './components/ThemeDrawer/index.vue'



const LayoutComponents:any = {
    classic:LayoutClassic
}

const globalStore = useGlobalStore();
const layout = computed(()=>globalStore.layout);

</script>
<style scoped lang="scss">
 
</style>