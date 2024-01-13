<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 16:45:31
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 17:23:54
 * @FilePath: /management-system/src/layout/LayoutColumn/index.vue
 * @Description: 分栏布局
-->
<template>
  <el-container class="layout">
    <div class="aside-split">
      <div class="logo flx-center">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <el-scrollbar>
        <div class="split-list">
          <div>
            <el-icon>
              <!-- <component :is="item.meta.icon"></component> -->
            </el-icon>
            <span class="title">外层菜单</span>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-aside >
      <div class="logo f-center">
        <span  class="logo-text">title</span>
      </div>
      <el-scrollbar>
        <!-- <el-menu
          :router="false"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :unique-opened="accordion"
          :collapse-transition="false"
        >
          <SubMenu :menu-list="subMenuList" />
        </el-menu> -->
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <!-- <ToolBarLeft />
        <ToolBarRight /> -->
      </el-header>
      <!-- <Main /> -->
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="layoutColumns">
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
</script>
<style scoped lang="scss"></style>
