import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
// import vue from "@vitejs/plugin-vue";
// vite 中无法使用path,fs 等node模块，需要安装 @types/node
import postcssPresetEnv from "postcss-preset-env";
import { resolve } from "path";
// import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  // 静态资源路径配置
  // base: "/dist/",
  // 依赖预配置
  optimizeDeps: {
    // 哪些模块不需要依赖预构建
    exclude: [],
  },
  // 哪些前缀环境变量，需要暴露到客户端,ENV_ 开头的变量
  envPrefix: "ENV",
  // 定义全局常量+在.d.ts中声明可获得提示
  define: {
    __PUBLIC_PATH__: JSON.stringify("hello"),
  },
  css: {
    // css 模块化规则
    modules: {
      // 类名命名规则,只能使用驼峰式规则
      localsConvention: "camelCaseOnly",
      // 模块化类名生成
      generateScopedName: "[name]_[local]_[hash:6]",
      // 是否开启模块化 默认 local-开启
      // scopeBehaviour:"local"
      hashPrefix: "other",
      // 哪些路径下文件，不需要模块化
      globalModulePaths: [],
    },
    // 预处理器
    preprocessorOptions: {
      less: {
        // 配置less中的全局变量
        globalVar: {
          gray: "#ccc",
        },
      },
    },
    // 调试时可以找到对应的css文件
    devSourcemap: true,
    // postcss
    postcss: {
      // css兼容性处理
      plugins: [postcssPresetEnv()],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },

  plugins: [
    react(),
    // splitVendorChunkPlugin 分割vendor
    splitVendorChunkPlugin(),
  ],
});
