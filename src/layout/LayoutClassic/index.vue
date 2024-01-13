<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 16:29:19
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 21:22:23
 * @FilePath: /management-system/src/layout/LayoutClassic/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup lang='ts' name='layoutClassic'>
import { ref, reactive, onMounted,computed} from 'vue'
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/store/modules/auth';

const route = useRoute();
const authStore = useAuthStore();

const menuList = computed(()=> authStore.showMenuListGet)
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
console.log("menuList",menuList.value);

</script>
<style scoped lang="scss">
 
</style>