/// <reference types="vite/client" />
// 定义一些环境变量，可以在ts中支持快捷输入，不定义则不支持提示
interface ImportMetaEnv {
  readonly VITE_MY_NAME: string;
}
declare const __PUBLIC_PATH__: string;
