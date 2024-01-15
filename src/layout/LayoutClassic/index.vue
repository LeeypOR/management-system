<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 16:29:19
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 21:16:41
 * @FilePath: /management-system/src/layout/LayoutClassic/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container class="layout">
    <el-header>
      <div class="header-lf mask-image">
        <div class="logo f-center">
          <img
            class="logo-img"
            src="@/assets/images/login/logo.svg"
            alt="logo"
          />
          <span class="logo-text">{{ title }}</span>
        </div>
        <ToolBarLeft />
      </div>
      <div class="header-ri">
        <ToolBarRight />
      </div>
    </el-header>
    <el-container class="classic-content">
      <el-aside>
        <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
          <el-scrollbar>
            <el-menu
              :router="false"
              :default-active="activeMenu"
              :collapse="isCollapse"
              :unique-opened="accordion"
              :collapse-transition="false"
            >
              <SubMenu :menu-list="menuList"/>
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main/>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="layoutClassic">
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useGlobalStore } from "@/store/modules/global";

import ToolBarLeft from "@/layout/components/Header/ToolBarLeft/index.vue";
import ToolBarRight from "@/layout/components/Header/ToolBarRight/index.vue";
import SubMenu from "../components/Menu/SubMenu.vue";
import Main from "../components/Main/index.vue" 

const route = useRoute();
const authStore = useAuthStore();
const globalStore = useGlobalStore()

const title = import.meta.env.VITE_GLOB_APP_TITLE;

const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() =>
  (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
);
const isCollapse = computed(()=> globalStore.isCollapse)
const accordion = computed(()=> globalStore.accordion)

</script>
<style scoped lang="scss">
@import "./index.scss";
// .el-container {
//   width: 100%;
//   height: 100%;
//   :deep(.el-header) {
//     box-sizing: border-box;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     height: 55px;
//     padding: 0 15px 0 0;
//     background-color: var(--el-header-bg-color);
//     border-bottom: 1px solid var(--el-header-border-color);
//     .header-lf {
//       display: flex;
//       align-items: center;
//       overflow: hidden;
//       white-space: nowrap;
//       .logo {
//         flex-shrink: 0;
//         width: 210px;
//         margin-right: 16px;
//         .logo-img {
//           width: 28px;
//           object-fit: contain;
//           margin-right: 6px;
//         }
//         .logo-text {
//           font-size: 21.5px;
//           font-weight: bold;
//           color: var(--el-header-logo-text-color);
//           white-space: nowrap;
//         }
//       }
//     }
//   }
//   .classic-content {
//     display: flex;
//     height: calc(100% - 55px);
//     :deep(.el-aside) {
//       width: auto;
//       background-color: var(--el-menu-bg-color);
//       border-right: 1px solid var(--el-aside-border-color);
//       .aside-box {
//         display: flex;
//         flex-direction: column;
//         height: 100%;
//         transition: width 0.3s ease;
//         .el-menu {
//           width: 100%;
//           overflow-x: hidden;
//           border-right: none;
//         }
//       }
//     }
//     .classic-main {
//       display: flex;
//       flex-direction: column;
//     }
//   }
// }
</style>
