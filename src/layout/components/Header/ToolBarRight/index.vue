<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 19:21:45
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-14 18:17:37
 * @FilePath: /management-system/src/layout/components/Header/ToolBarRight/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='tool-bar-right'>
    <div class="header-icon">
      
    </div>
    <span class="username">{{ username }}</span>
    <Avatar/>
  </div>
</template>

<script setup   name=''>
import { ref, reactive, onMounted,computed} from 'vue'
import { useRoute } from 'vue-router';
import {useUserStore} from '@/store/modules/user';
import Avatar from '../components/Avatar.vue';

const userStore = useUserStore();
const username = computed(()=>userStore.userInfo.name)

</script>
<style scoped lang="scss">
 .tool-bar-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  .header-icon {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 21px;
      color: var(--el-header-text-color);
    }
  }
  .username {
    margin: 0 20px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>