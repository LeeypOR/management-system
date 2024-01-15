/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 19:25:39
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 14:37:35
 * @FilePath: /management-system/src/store/modules/keepAlive.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

export const useKeepAliveStore = defineStore({
  id: "lyp-keepAlive",
  state: () => ({
    keepAliveName: []
  }),
  actions: {
    // Add KeepAliveName
    async addKeepAliveName(name) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
    },
    // Remove KeepAliveName
    async removeKeepAliveName(name) {
      this.keepAliveName = this.keepAliveName.filter(item => item !== name);
    },
    // Set KeepAliveName
    async setKeepAliveName(keepAliveName = []) {
      this.keepAliveName = keepAliveName;
    }
  }
});
