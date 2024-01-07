import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
// vite 中无法使用path,fs 等node模块，需要安装 @types/node
import { resolve } from "path";
// import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  // 静态资源路径配置
  base: "/dist/",
  // 定义全局常量+在.d.ts中声明可获得提示
  define: {
    __PUBLIC_PATH__: JSON.stringify("hello"),
  },
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // 多页面入口打包
  build: {
    // 浏览器支持版本，modules 默认值
    target: "modules",
    // 依赖库单独打包
    lib: {
      entry: "./public/js/jquery-3.7.1.min",
      name: "jquery",
      fileName: "jquery",
    },
    // rollup 自定义构建
    rollupOptions: {
      // 页面入口配置
      input: {
        index: "./index.html",
        home: "./home.html",
      },
      output: [
        {
          dir: "dist",
          format: "es",
          chunkFileNames: "[name]-[hash].js",
        },
        {
          dir: "dist",
          format: "es",
          chunkFileNames: "[name]-[hash].js",
        },
      ],
    },
  },
  plugins: [
    react(),
    // splitVendorChunkPlugin 分割vendor
    splitVendorChunkPlugin(),
  ],
});
