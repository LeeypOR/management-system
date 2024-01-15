<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-14 18:49:39
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-14 18:51:13
 * @FilePath: /management-system/src/layout/components/Main/components/Maximize.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="maximize" @click="exitMaximize">
    <i :class="'iconfont icon-tuichu'"></i>
  </div>
</template>

<script setup   name='maximize'>
import { ref, reactive, onMounted} from 'vue'
import { useRoute } from 'vue-router';
import { useGlobalStore } from '@/store/modules/global';


const globalStore = useGlobalStore();
const exitMaximize = () => {
  globalStore.setGlobalState("maximize", false);
};
</script>
<style scoped lang="scss">
 
</style>