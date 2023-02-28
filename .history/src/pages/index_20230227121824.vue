<template>
  <div class="common-layout">
    <el-container height="100%" class="container">
      <el-aside width="200px">Aside</el-aside>
      <el-container >
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<script setup lang="ts">


</script>

<style lang="less"  scoped>
.common-layout{
  height: 100%;
}
:deep(.container){
  height: 100%;
}
</style>