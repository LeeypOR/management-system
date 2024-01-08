/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 17:04:50
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-08 14:36:11
 * @FilePath: /management-system/src/store/modules/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { UserState } from "@/store/interface";
import piniaPersistConfig from "@/config/piniaPersist";

export const useUserStore = defineStore({
  id: "lyp-user",
  state: (): UserState => ({
    access_token: "",
    userInfo: {},
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.access_token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
  },
  persist: piniaPersistConfig("lyp-user"),
});
