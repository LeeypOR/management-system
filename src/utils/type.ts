/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-05 14:50:40
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-05 14:54:04
 * @FilePath: /management-system/src/utils/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 声明接口 HYRequestInterceptors 主要是为了interceptor拦截器能从类实例化的时候自己声明一个外部的拦截器
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

// 声明接口 HYRequestConfig 是继承于Axios的类 AxiosRequestConfig 然后将我们需要的接口在写进接口
// 例如 interceptors , showLoading 后期就可以有需求就往里面加接口
// <T = AxiosResponse>泛型：后期可以传入自己的类型
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>;
  showLoading?: boolean;
}
