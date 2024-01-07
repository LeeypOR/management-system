/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 18:59:08
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 19:15:02
 * @FilePath: /management-system/src/languages/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";

import zh from "./modules/zh";
import en from "./modules/en";

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zh,
    en
  },
});

export default i18n;
