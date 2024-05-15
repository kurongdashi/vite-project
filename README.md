# vite 新一代构建工具

## vite 的优势

- vite 内置开发服务器 + rollup 打包
- 脚手架 create-vite : 内置多种框架模板可选 vue、react 等等
- vite 将模块分成依赖（大型不会变动的存 js 库文件）+ 源码(jsx,ts,vue 等需要转换的文件) 分开加载
- 预构建依赖：将使用 esbuild（Go 语言编写比 js 快 10-100 倍）对 react，lodash 等依赖进行预构建

```js
// 浏览器不你能识别模块化的导入，所以预构建后将变成
import { someMethod } from "my-dep";
// 将加载过的模块缓存到node_modules/.vite目录
import { someMethod } from "/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd";
```

- 源码：es6 的导入方式交给浏览器去解析 + http 缓存加载（源码是通过 last-modified 协商缓存处理，依赖因为不变所以是 cache-control:max-age=xx,进行强缓存），目的让浏览器分担更多任务

vite 是按需加载所以不建议编译时进行 eslint 检查，而是单独配置一条命令

```

npx create vite xxx

```

## vite 配置

- 入口默认为项目根目录下 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- 必须指定src的js入口及 type=module -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- 内置 dotenv 库,默认加载当前工作目录下的以下文件

1.  .env 默认加载环境变量
2.  .env.development 开发环境加载
3.  .env.production 生产环境加载

- yarn dev 默认会执行 --mode development 然后就会加载.development 结尾的配置文件，可手动更改 --mode xxx 则会加载.env.xxx 文件

```js
// .env 文件
// VITE_开头的文件会被注入到 客户端环境中通过 import.meta.env 访问
VITE_MY_NAME = "张三丰";
// 没有VITE_ 开头的则只能在node环境使用，可通过 envPrefix= xx 去替换VITE_
USER_NAME = "武当掌门";
```

## 对 css 的支持,只需修改文件命名 `index.module.(less|css)`

- 通过 fs 读取 css 内容替换为 js 脚本 ，设置 content-type 为 text/javascript ，让浏览器以 js 解析
- 安装 less 即可获得 less 支持

```js
// css编译后生成js脚本
const __vite__css = ".index-module_home_90e957 {\n  padding: 10px;\n}\n.index-module_home_90e957 .index-module_title_67e533 {\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 20px;\n
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
