/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-06 23:47:54
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-06 23:50:26
 * @FilePath: /management-system/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia