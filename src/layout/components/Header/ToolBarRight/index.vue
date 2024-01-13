<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 19:21:45
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 22:45:07
 * @FilePath: /management-system/src/layout/components/Header/ToolBarRight/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='tool-bar-right'>
    <div class="header-icon">
    </div>
    <span class="username">{{ username }}</span>
  </div>
</template>

<script setup lang='ts' name=''>
import { ref, reactive, onMounted,computed} from 'vue'
import { useRoute } from 'vue-router';
import {useUserStore} from '@/store/modules/user';

const userStore = useUserStore();
const username = computed(()=>userStore.userInfo.name)
console.log("username",username);

</script>
<style scoped lang="scss">
 
</style>