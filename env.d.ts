/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-06 23:21:08
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-06 23:21:24
 * @FilePath: /management-system/env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module "*.vue" {
    import { ComponentOptions } from "vue";

    const componentOptions: ComponentOptions;

    export default componentOptions;
}