import React from "react";
import { RouteObject } from "react-router-dom";
const Home = React.lazy(() => import("./views/Home"));
const Detail = React.lazy(() => import("./views/Detail"));
const appRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
];
export default appRouter;
