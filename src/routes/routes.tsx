import React from "react";
import { PartialRouteObject } from "react-router";
import Home from "../views/home";
import Layout from "../views/layout";
import Shop from "../views/shop";

const routes: PartialRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop/:id",
        element: <Shop />,
      },
    ],
  },
  // { path: "/home", element: <Home /> },
  { path: "*", element: (() => <div style={{display: "flex", justifyContent: "center", width: "100%"}}><span style={{color: "red", fontWeight: "bold"}}>Rota não encontrada</span></div>)() },
];

export default routes;
