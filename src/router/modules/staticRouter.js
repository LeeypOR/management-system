/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 16:52:27
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 14:56:33
 * @FilePath: /management-system/src/router/modules/staticRouter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { HOME_URL, LOGIN_URL } from "@/config";

export const staticRouter = [
  {
    path: "/",
    redirect: HOME_URL,
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path:"/layout",
    name:"layout",
    component: () => import("@/layout/index.vue"),
    // component: () => import("@/layout/indexAsync.vue"),
    children:[],
    redirect:HOME_URL
  }
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/components/ErrorMessage/403.vue"),
    meta: {
      title: "403页面",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/ErrorMessage/404.vue"),
    meta: {
      title: "404页面",
    },
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/components/ErrorMessage/500.vue"),
    meta: {
      title: "500页面",
    },
  },
  // Resolve refresh page, route warnings
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/ErrorMessage/404.vue"),
  },
];
