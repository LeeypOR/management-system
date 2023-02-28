<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container >
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<script setup lang="ts">
import Menu from './BasePage/Menu.vue'

</script>

<style lang="less"  scoped>
.common-layout{
  height: 100%;
}
:deep(.container){
  height: 100%;
}
</style>