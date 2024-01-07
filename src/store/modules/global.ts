/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 18:26:01
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 19:27:05
 * @FilePath: /management-system/src/store/modules/global.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { GlobalState } from "@/store/interface";
import { DEFAULT_PRIMARY } from "@/config";
import piniaPersistConfig from "@/config/piniaPersist";

export const useGlobalStore = defineStore({
  id: "lyp-global",
  // 修改默认值之后，需清除 localStorage 数据
  state: (): GlobalState => ({
    // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
    layout: "vertical",
    // element 组件大小
    assemblySize: "default",
    // 当前系统语言
    language: null,
    // 当前页面是否全屏
    maximize: false,
    // 主题颜色
    primary: DEFAULT_PRIMARY,
    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    // 侧边栏反转
    asideInverted: false,
    // 头部反转
    headerInverted: false,
    // 折叠菜单
    isCollapse: false,
    // 菜单手风琴
    accordion: false,
    // 面包屑导航
    breadcrumb: true,
    // 面包屑导航图标
    breadcrumbIcon: true,
    // 标签页
    tabs: true,
    // 标签页图标
    tabsIcon: true,
    // 页脚
    footer: true
  }),
  getters: {},
  actions: {
    // Set GlobalState
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] });
    }
  },
  persist: piniaPersistConfig("lyp-global")
});
