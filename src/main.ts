/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2023-11-17 09:46:00
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-07 19:08:58
 * @FilePath: /management-system/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'

// pinia store
import pinia from "@/store";
// vue i18n
import I18n from "@/languages/index";



const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(I18n)
app.use(pinia)


app.mount('#app')

