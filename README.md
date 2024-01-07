# vite 新一代构建工具

vite 内置开发服务器+ rollup 打包
create-vite : 内置多种框架模板可选 vue、react 等等

## vite 的优势

```
vite 将模块分成依赖+源码 分开加载
依赖：将使用esbuild（Go语言编写比js快） 预构建
源码：使用懒加载 + es6的导入方式交给浏览器去解析 + http缓存加载

vite是按需加载所以不建议编译时进行eslint检查，而是单独配置一条命令

```

- 浏览器缓存 [浏览器缓存](https://blog.csdn.net/qq_38290251/article/details/131702482)

```
按优先级排序如下：
1、serveice worker 是一种js拦截脚本，拦截请求并返回缓存内容（拦截优先级最高）
2、强缓存 cache-control 和expires 响应头实现，让浏览器从本地缓存中读取资源不发起请求
3、协商缓存 last-modified 和 eTag 响应头，发起请求如果服务器返回304，则直接使用本地资源
4、web storage 缓存 sessionStorage localStorage
```

### vite 静态资源处理

- 定义静态资源类型在 ts 中，创建.d.ts 文件

```
// .d.ts文件
/// <reference types="vite/client" />

// 定义一些环境变量，可以在ts中支持快捷输入，不定义则不支持提示
interface ImportMetaEnv {
  readonly VITE_MY_NAME: string;
}

```

### vite 环境变量在根目录下定义不同环境配置

```
在 build 命令中 --mode prod 配置打包环境（默认是production）
--- .env
--- .env.prod
--- .env.prev
```
