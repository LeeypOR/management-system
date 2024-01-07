/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 00:19:40
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 19:37:03
 * @FilePath: /management-system/src/api/modules/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import authButtonList from "@/assets/json/authButtonList.json"
import authMenuList from "@/assets/json/authMenuList.json"
import hyRequest from "@/utils/invoking"
/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params:any) => {
  return {
    code:200,
    data:{
      access_token:"123",
      userInfo:{name:"lyp"}
    },
    msg:"success"

  }
  // return hyRequest.post<Login.ResLogin>(PORT1 + `/login`, params); // 正常 post json 请求  ==>  application/json
  // return http.post<Login.ResLogin>(PORT1 + `/login`, params, { noLoading: true }); // 控制当前请求不显示 loading
  // return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  // return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post 请求携带表单参数  ==>  application/x-www-form-urlencoded
  // return http.get<Login.ResLogin>(PORT1 + `/login?${qs.stringify(params, { arrayFormat: "repeat" })}`); // get 请求可以携带数组等复杂参数
};

export const getAuthButtonListApi = () => {
  return authButtonList
}

export const getAuthMenuListApi = () => {
  return authMenuList
}