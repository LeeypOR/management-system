/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 19:25:10
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 14:41:46
 * @FilePath: /management-system/src/store/modules/tabs.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "@/router";
import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import { useKeepAliveStore } from "./keepAlive";

const keepAliveStore = useKeepAliveStore();

export const useTabsStore = defineStore({
  id: "lyp-tabs",
  state: () => ({
    tabsMenuList: []
  }),
  actions: {
    // Add Tabs
    async addTabs(tabItem) {
      if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem);
      }
    },
    // Remove Tabs
    async removeTabs(tabPath, isCurrent = true) {
      const tabsMenuList = this.tabsMenuList;
      if (isCurrent) {
        tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return;
          const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
          if (!nextTab) return;
          router.push(nextTab.path);
        });
      }
      this.tabsMenuList = tabsMenuList.filter(item => item.path !== tabPath);
    },
    // Close Tabs On Side
    async closeTabsOnSide(path, type) {
      const currentIndex = this.tabsMenuList.findIndex(item => item.path === path);
      if (currentIndex !== -1) {
        const range = type === "left" ? [0, currentIndex] : [currentIndex + 1, this.tabsMenuList.length];
        this.tabsMenuList = this.tabsMenuList.filter((item, index) => {
          return index < range[0] || index >= range[1] || !item.close;
        });
      }
      keepAliveStore.setKeepAliveName(this.tabsMenuList.map(item => item.name));
    },
    // Close MultipleTab
    async closeMultipleTab(tabsMenuValue) {
      this.tabsMenuList = this.tabsMenuList.filter(item => {
        return item.path === tabsMenuValue || !item.close;
      });
      keepAliveStore.setKeepAliveName(this.tabsMenuList.map(item => item.name));
    },
    // Set Tabs
    async setTabs(tabsMenuList) {
      this.tabsMenuList = tabsMenuList;
    },
    // Set Tabs Title
    async setTabsTitle(title) {
      const nowFullPath = location.hash.substring(1);
      this.tabsMenuList.forEach(item => {
        if (item.path == nowFullPath) item.title = title;
      });
    }
  },
  persist: piniaPersistConfig("lyp-tabs")
});
