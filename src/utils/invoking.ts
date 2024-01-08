/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-05 15:19:20
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-08 14:29:57
 * @FilePath: /management-system/src/utils/invoking.ts
 * @Description: axios主入口
 */
 
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { useUserStore } from "@/store/modules/user";

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const userStore = useUserStore();
      // 携带token的拦截
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      if (config.headers && typeof config.headers.set === "function") {
        config.headers.set("x-access-token", userStore.access_token);
      }
      console.log('请求成功的拦截！')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截！')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截！')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截！')
      return err
    }
  }
})

export default hyRequest