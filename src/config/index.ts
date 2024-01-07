/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-05 17:20:44
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 19:33:04
 * @FilePath: /management-system/src/config/index.ts
 * @Description: 全局默认配置
 */

//首页地址(默认)
export const HOME_URL: string = "/home/index";

// 登录页地址（默认）
export const LOGIN_URL: string = "/login";

// 默认主题颜色
export const DEFAULT_PRIMARY: string = "#009688";

// 路由白名单地址（必须是本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ["/500"];

// 高德地图 key
export const AMAP_MAP_KEY: string = "";

// 百度地图 key
export const BAIDU_MAP_KEY: string = "";