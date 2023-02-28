<template>
  <div>
    <!-- <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
      </el-main> -->
      这是默认页面
      <router-view name="/"></router-view>
  </div>
</template>

<script lang="ts" setup>

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style lang="less"  scoped>
.common-layout{
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
}
:deep(.el-main){
  height: 100%;
}
</style>