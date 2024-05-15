// defineConfig 导出配置可，让vscode提示语法,入参可以是对象或函数
import { defineConfig, loadEnv } from "vite";
// 根据环境区分打包配置
import baseConfig from "./vite.base.config";
import devConfig from "./vite.dev.config";
import prodConfig from "./vite.prod.config";
const configResolver = {
  build: () => {
    console.log("生产环境");
    return { ...baseConfig, ...prodConfig };
  },
  serve: () => {
    console.log("开发环境");
    return { ...baseConfig, ...devConfig };
  },
};
export default defineConfig(({ command, mode }) => {
  // command prod-生产，serve-开发， mode 默认development,可修改
  console.log("command, mode", command, mode);
  // 加载环境变量： loadEnv(mode,endDir,prefixes)
  const env = loadEnv(mode, process.cwd(), "");
  // console.log("env", env);

  return configResolver[command]();
});
