import { defineConfig } from "vite";
// 资源压缩插件gizp
import VitePluginCompression from "vite-plugin-compression";
export default defineConfig({
  plugins: [
    // VitePluginCompression({
    //   verbose: true, // 默认即可
    //   disable: false, // 开启压缩(不禁用)，默认即可
    //   deleteOriginFile: false, // 删除源文件
    //   threshold: 5120, // 压缩前最小文件大小
    //   algorithm: "gzip", // 压缩算法
    //   ext: ".gz", // 文件类型
    // }),
  ],
  // 多页面入口打包
  build: {
    // 浏览器支持版本，modules 默认值
    target: "modules",
    // chunk 分割最大size
    chunkSizeWarningLimit: 1500,
    // rollup 自定义构建
    rollupOptions: {
      treeshake: true,
      output: {
        // 入口输出
        entryFileNames: "js/[name].[hash:6].js",
        // chunk 输出
        chunkFileNames: "js/[name].[hash:6].js",
        // 资源输出
        assetFileNames: "assets/[name].[hash:6].[ext]",
        manualChunks(id) {
          console.log("id.toString()", id.toString());
          const idStr = id.toString();
          const reg = /[\\/]node_modules[\\/](.*)[\\/]/;
          if (reg.test(idStr)) {
            // return idStr.match(reg)[1].toString();
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
