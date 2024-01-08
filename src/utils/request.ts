/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-05 14:54:23
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-08 14:17:32
 * @FilePath: /management-system/src/utils/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 完成的功能如下：
// 1.封装的拦截器类型：对应的实例的拦截器、所有的实例都有的拦截器、每个请求单独的拦截器
// 2.在请求/响应拦截器中对错误进行处理：
// 1）失败类型一：HttpErrorCode->responseCatch:err->err.response.status【2xx：成功；4xx：失败；5xx：失败】
// 2）失败类型二：虽200->成功，但数据{data:‘’，success:false,returnCode:-1001}
// 具体使用哪种，看服务器提供的是哪种类型
// 3.对axios封装好的数据进行处理：res.data
// 4.在请求/响应拦截器中添加loading/移除loading【element-plus的一个组件】，可根据不同请求的需要决定是否添加loading
// 5.封装resquest请求，之后调用时直接get|post|delete即可

// 对axios二次封装
import axios from "axios";
// 引入axios实例类型
import type { AxiosInstance } from "axios";
// 引入自己封装的接口
import type { HYRequestConfig, HYRequestInterceptors } from "./type";
// 引入loading
import { ElLoading } from "element-plus/lib/index";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
import { ResultData } from "@/api/interface";
// 定义是否添加loading的初始值
const DEFAULT_LOADING = true;

// 封装axios类
class HYRequest {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors;
  showLoading: boolean;
  loading?: LoadingInstance;

  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    // 保存基本信息
    this.interceptors = config.interceptors;
    // 若showLoading为null | undefined, 则默认加loading;否则不加
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器：请求成功拦截");

        // 添加loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true, // 是否锁屏
            text: "正在请求数据....",
            background: "rgba(0,0,0,0.1)",
            // spinner: 'el-icon-loading',   // 引入的loading图标
            // customClass: "mask", // 遮罩层新增类名
            fullscreen: true, // 全屏开关
          });
        }
        return config;
      },
      (err) => {
        console.log("所有的实例都有的拦截器：请求失败拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实例都有的拦截器：响应成功拦截");

        // 将loading移除【真正写项目的时候,后台返回数据成功之后,loading.close()即可，不需要添加定时器,此处只是做一个展示】
        // setTimeout(() => {
          
        // }, 1000);
        console.log(res,"res");
        const data = res.data;
        this.loading?.close();
        if (data?.code == "-1001") {
          console.log("请求失败~,错误信息");
        } else {
          return data;
        }
      },
      (err) => {
        console.log("所有的实例都有的拦截器：响应失败拦截");
        // 将loading移除
        this.loading?.close();
        // 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误！");
        }
        return err;
      }
    );
  }

  // 封装request请求
  // 声明接口泛型是从外部导入 , 但是在type.ts中已经初始化赋值了AxiosResponse类型
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }

          // 2.将showLoading设置为true,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置为true,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default HYRequest;
