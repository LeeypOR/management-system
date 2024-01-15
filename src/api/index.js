/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-05 15:23:04
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-08 11:46:09
 * @FilePath: /management-system/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import hyRequest from "../utils/invoking";



export function getData(params, data) {
  return hyRequest.get({
    url: "home/multidata",
    data,
    params
    // showLoading: false,  //若写false,说明不需要添加loading
  });
}
