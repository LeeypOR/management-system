<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 10:59:45
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 15:02:05
 * @FilePath: /management-system/src/layout/components/Menu/SubMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="subItem.path"
      @click="handleClickMenu(subItem)"
    >
      <el-icon>
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span class="sle">{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// defineProps<{ menuList }>();
defineProps({
  menuList:{
    
  }
})

const router = useRouter();
const handleClickMenu = (subItem) => {
  //当前菜单有外链则直接新标签跳转 否则跳至路由
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
  else router.push(subItem.path);
};
</script>
<style scoped lang="scss"></style>
