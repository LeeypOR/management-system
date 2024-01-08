<!--
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-06 20:43:46
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-08 10:53:22
 * @FilePath: /management-system/src/views/Login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container f-center">
    <div class="login-box">
      <SwitchDark class="dark" />
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/login/logo.svg" alt="" />
          <h2 class="logo-text">欢迎登录</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
import SwitchDark from "@/components/SwitchDark/index.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";

</style>
