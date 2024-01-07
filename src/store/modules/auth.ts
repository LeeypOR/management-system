/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-06 23:48:07
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 00:23:45
 * @FilePath: /management-system/src/store/modules/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { AuthState } from "../interface/index";
import {
  getShowMenuList,
  getFlatMenuList,
  getAllBreadcrumbList,
} from "@/utils";
import {getAuthButtonListApi,getAuthMenuListApi} from "@/api/modules/login"

export const useAuthStore = defineStore({
  id: "lyp-auth",
  state: (): AuthState => ({
    routeName: "",
    authButtonList: {},
    authMenuList: [],
  }),
  getters: {
    // 按钮权限列表
    authButtonListGet: (state) => state.authButtonList,
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: (state) => state.authMenuList,
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),
    // 递归处理后的所有面包屑导航列表
    breadcrumbListGet: (state) => getAllBreadcrumbList(state.authMenuList),
  },
  actions: {
    // Get AuthButtonList
    async getAuthButtonList() {
      const { data } = await getAuthButtonListApi();
      this.authButtonList = data;
    },
    // Get AuthMenuList
    async getAuthMenuList() {
      const { data } = await getAuthMenuListApi();
      this.authMenuList = data;
    },
    // Set RouteName
    async setRouteName(name: string) {
      this.routeName = name;
    },
  },
});
