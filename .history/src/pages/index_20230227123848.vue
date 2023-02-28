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
        <el-main>
          <Main></Main>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<script setup lang="ts">
import Menu from './BasePage/Menu.vue'
import Header from './BasePage/Header.vue'
import Main from './BasePage/Main.vue'

</script>

<style lang="less"  scoped>

:deep(.el-main){
  padding-top: 0;
}
</style>