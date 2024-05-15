import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import appRouter from "./route";
// 全局常量使用
console.log("__PUBLIC_PATH__", __PUBLIC_PATH__);
const router = createBrowserRouter(appRouter);
function App() {
  return (
    <Suspense fallback="加载中...">
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
