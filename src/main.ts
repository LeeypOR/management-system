/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2023-11-17 09:46:00
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-08 11:04:43
 * @FilePath: /management-system/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";

import router from "./router/index";

// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// element icons
import * as Icons from "@element-plus/icons-vue";
// custom element dark css
import "@/styles/element-dark.scss";
// custom element css
import "@/styles/element.scss";

// pinia store
import pinia from "@/store";
// vue i18n
import I18n from "@/languages/index";

const app = createApp(App);

// register the element Icons component
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(ElementPlus);
app.use(router);
app.use(I18n);
app.use(pinia);

app.mount("#app");
