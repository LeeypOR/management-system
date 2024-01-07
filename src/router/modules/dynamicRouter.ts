/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 17:02:40
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 18:41:13
 * @FilePath: /management-system/src/router/modules/dynamicRouter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "@/router/index";
import { LOGIN_URL } from "@/config";
import { RouteRecordRaw } from "vue-router";
import { ElNotification } from "element-plus";
import { useAuthStore } from "@/store/modules/auth";
import { useUserStore } from "@/store/modules/user";

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

export const initDynamicRouter = async () => {
  let authStore = useAuthStore();
  let userStore = useUserStore();

  try {
    // 1.获取菜单列表和按钮列表
    await authStore.getAuthMenuList();
    await authStore.getAuthButtonList();

    // 2.判断当前用户有没有菜单权限
    if (!authStore.authMenuListGet.length) {
      ElNotification({
        title: "无权限访问",
        message: "当前账号无任何菜单权限，请联系系统管理员！",
        type: "warning",
        duration: 3000,
      });
      userStore.setToken("");
      router.replace(LOGIN_URL);
      return Promise.reject("No permission");
    }

    // 3.添加动态路由
    authStore.flatMenuListGet.forEach((item) => {
      item.children && delete item.children;
      if (item.component && typeof item.component == "string") {
        item.component = modules["/src/views" + item.component + ".vue"];
      }
      if (item.meta.isFull) {
        router.addRoute(item as unknown as RouteRecordRaw);
      } else {
        console.log(123312);
        router.addRoute("layout", item as unknown as RouteRecordRaw);
      }
    });
  } catch (error) {
    // 当按钮 || 菜单请求出错时，重定向到登陆页
    userStore.setToken("");
    router.replace(LOGIN_URL);
    return Promise.reject(error);
  }
};
