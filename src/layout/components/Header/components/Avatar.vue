<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-13 21:33:47
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 21:31:07
 * @FilePath: /management-system/src/layout/components/Header/components/Avatar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="@/assets/images/user/avatar.gif" alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-item @click="openDialog('infoRef')">
        <el-icon><User /></el-icon>个人信息
      </el-dropdown-item>
      <el-dropdown-item @click="openDialog('passwordRef')">
        <el-icon><Edit /></el-icon>修改密码
      </el-dropdown-item>
      <el-dropdown-item divided @click="logout">
        <el-icon><SwitchButton /></el-icon>退出登录
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="">
import { ref, reactive, onMounted } from "vue";
import {LOGIN_URL} from "@/config"
import { useRouter } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
import { useUserStore } from "@/store/modules/user";
const router = useRouter();
const userStore = useUserStore();

const openDialog = (value: string) => {};

const logout = () => {
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    // 1.执行退出登录接口
    // await logoutApi();

    // 2.清除 Token
    userStore.setToken("");

    // 3.重定向到登陆页
    router.replace(LOGIN_URL);
    ElMessage.success("退出登录成功！");
  });
};
</script>
<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
