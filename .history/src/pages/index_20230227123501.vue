<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container >
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<script setup lang="ts">
import Menu from './BasePage/Menu.vue'
import Header from './BasePage/Header.vue'

</script>

<style lang="less"  scoped>
.common-layout{
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
}
:deep(.container){
  height: 100%;
}
</style>