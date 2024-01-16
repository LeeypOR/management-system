<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-16 19:45:04
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-16 19:56:29
 * @FilePath: /management-system/src/layout/components/Tabs/components/MoreButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown trigger="click" :teleported="false">
    <div class="more-button">
      <i :class="'iconfont icon-xiala'"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">
          <el-icon><Refresh /></el-icon>刷新
        </el-dropdown-item>
        <!-- <el-dropdown-item @click="maximize">
          <el-icon><FullScreen /></el-icon>最大化
        </el-dropdown-item> -->
        <el-dropdown-item divided @click="closeCurrentTab">
          <el-icon><Remove /></el-icon>关闭当前
        </el-dropdown-item>
        <el-dropdown-item @click="tabStore.closeTabsOnSide(route.fullPath, 'left')">
          <el-icon><DArrowLeft /></el-icon>关闭左侧
        </el-dropdown-item>
        <el-dropdown-item @click="tabStore.closeTabsOnSide(route.fullPath, 'right')">
          <el-icon><DArrowRight /></el-icon>关闭右侧
        </el-dropdown-item>
        <el-dropdown-item divided @click="closeOtherTab">
          <el-icon><CircleClose /></el-icon>关闭其他
        </el-dropdown-item>
        <el-dropdown-item @click="closeAllTab">
          <el-icon><FolderDelete /></el-icon>关闭所有
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { inject, nextTick } from "vue";
import { HOME_URL } from "@/config";
import { useTabsStore } from "@/store/modules/tabs";
import { useGlobalStore } from "@/store/modules/global";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();
const globalStore = useGlobalStore();
const keepAliveStore = useKeepAliveStore();

// refresh current page
const refreshCurrentPage: Function = inject("refresh") as Function;
const refresh = () => {
  setTimeout(() => {
    keepAliveStore.removeKeepAliveName(route.name as string);
    refreshCurrentPage(false);
    nextTick(() => {
      keepAliveStore.addKeepAliveName(route.name as string);
      refreshCurrentPage(true);
    });
  }, 0);
};

// maximize current page
const maximize = () => {
  globalStore.setGlobalState("maximize", true);
};

// Close Current
const closeCurrentTab = () => {
  if (route.meta.isAffix) return;
  tabStore.removeTabs(route.fullPath);
  keepAliveStore.removeKeepAliveName(route.name as string);
};

// Close Other
const closeOtherTab = () => {
  tabStore.closeMultipleTab(route.fullPath);
};

// Close All
const closeAllTab = () => {
  tabStore.closeMultipleTab();
  router.push(HOME_URL);
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
