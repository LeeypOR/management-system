<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-14 18:51:22
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 14:59:48
 * @FilePath: /management-system/src/layout/components/Main/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="keepAliveName">
          <component :is="Component" v-if="isRouterShow" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
  <el-footer v-if="footer">
    <Footer />
  </el-footer>
</template>

<script setup  > 
import { ref, reactive, onBeforeUnmount,provide} from 'vue';
import { storeToRefs } from "pinia";
import { useDebounceFn } from "@vueuse/core";
import { useGlobalStore } from "@/store/modules/global";
import { useKeepAliveStore } from "@/store/modules/keepAlive";
import Footer from "@/layout/components/Footer/index.vue"

const globalStore = useGlobalStore();
const { maximize, isCollapse, layout, tabs, footer } = storeToRefs(globalStore);

const keepAliveStore = useKeepAliveStore();
const { keepAliveName } = storeToRefs(keepAliveStore);

// 注入刷新页面方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val) => (isRouterShow.value = val);
provide("refresh", refreshCurrentPage);

 
// 监听窗口大小变化，折叠侧边栏
const screenWidth = ref(0);
const listeningWindow = useDebounceFn(() => {
  screenWidth.value = document.body.clientWidth;
  if (!isCollapse.value && screenWidth.value < 1200) globalStore.setGlobalState("isCollapse", true);
  if (isCollapse.value && screenWidth.value > 1200) globalStore.setGlobalState("isCollapse", false);
}, 100);
window.addEventListener("resize", listeningWindow, false);
onBeforeUnmount(() => {
  window.removeEventListener("resize", listeningWindow);
});
</script>
<style scoped lang="scss">
 .el-main {
  box-sizing: border-box;
  padding: 10px 12px;
  overflow-x: hidden;
  background-color: var(--el-bg-color-page);
}
.el-footer {
  height: auto;
  padding: 0;
}

</style>