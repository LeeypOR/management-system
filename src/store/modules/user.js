/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 17:04:50
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 14:39:48
 * @FilePath: /management-system/src/store/modules/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";

export const useUserStore = defineStore({
  id: "lyp-user",
  state: () => ({
    access_token: "",
    userInfo: {
      name:"老李",
    },
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token) {
      this.access_token = token;
      console.log("this.access_token",this.access_token);
    },
    // Set setUserInfo
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
      console.log("this.userInfo",this.userInfo);
    },
  },
  persist: piniaPersistConfig("lyp-user"),
});
