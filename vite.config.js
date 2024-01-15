/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2023-11-17 09:46:00
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-13 17:29:23
 * @FilePath: /management-system/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";`
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-omport.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@/*": resolve(__dirname, "./src/*"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
    },
  },
});
