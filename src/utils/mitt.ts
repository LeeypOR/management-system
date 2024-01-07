/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2023-11-18 18:07:45
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2023-12-01 14:07:41
 * @FilePath: /management-system/src/utils/mitt.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mitt from 'mitt';
import type { Emitter } from 'mitt';
export const bus:Emitter<any> = mitt();