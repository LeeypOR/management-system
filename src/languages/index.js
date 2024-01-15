/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 18:59:08
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 23:30:43
 * @FilePath: /management-system/src/languages/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { createI18n,VueI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";

import zh from "./modules/zh";
import en from "./modules/en";


// const i18n = createI18n({
//   // Use Composition API, Set to false
//   globalInjection:true, //全局生效$t
//   allowComposition: true,
//   legacy: false,
//   locale: getBrowserLang(),
//   messages: {
//     zh,
//     en
//   },
// });

// export default i18n;

// index.ts
import { createI18n } from 'vue-i18n'
 
const messages = {
    en,
    zh,
}
const language = (navigator.language || 'en').toLocaleLowerCase() // 这是获取浏览器的语言
const i18n = createI18n({
    locale: getBrowserLang(),
    fallbackLocale: 'zh', // 设置备用语言
    messages,
    legacy: false,
    globalInjection:true,
})
 
export default i18n