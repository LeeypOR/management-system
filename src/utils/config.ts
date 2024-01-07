/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-05 15:12:44
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-05 15:14:27
 * @FilePath: /management-system/src/utils/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 根据process.env.NODE_ENV的值区分不同环境
// 开发环境：development;生产环境：production;测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
export { BASE_URL, TIME_OUT }