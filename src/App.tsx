import React, { Suspense, lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { NavBox } from "./components/NavBox";
import { NavBoxDefaultPage } from "./components/NavBox/navBoxPages/NavBoxDefaultPage";
import { NavBoxFirstPage } from "./components/NavBox/navBoxPages/NavBoxFirstPage";
import { NavBoxProfilePage } from "./components/NavBox/navBoxPages/NavBoxProfilePage";
import { TestPage2 } from "./components/NavBox/navBoxPages/TestPage2";
import { MainPage } from "./pages/MainPage";
import { FirstLayout } from "./FirstLayout";
import { Spinner } from "./components/Spinner";

const LocationPage = lazy(()=>import('./pages/LocationPage'))
const TestPage = lazy(()=>import('./pages/TestPage'))
const LoginPage = lazy(()=>import('./pages/LoginPage'))

const suspense = (page: React.ReactNode, fallback = <Spinner />) => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

export const App = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <FirstLayout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "locationPage", element: suspense(<LocationPage/>) },
        { path: "testPage", element: suspense(<TestPage/>) },
        { path: "login", element: suspense(<LoginPage/>) },
        {
          path: "navbar", element: <NavBox />,
          children: [
            { index: true, element: <NavBoxDefaultPage /> },
           
            { path: "profile", element: <NavBoxProfilePage /> },
            { path: "history", element: "HISTORY" },
            {
              path: "account",
              element: <NavBoxFirstPage />,
              // children: [
              //   // {index: true, element: <> <h3>111111</h3> </> },
              //   {path: "01", element: <> <h3>1111111111</h3> </>}
              // ]
            },
            { path: "account/:id", element: <TestPage2 /> },
          ],
        },
        { path: '*', element: '<ErrorPage />' },
      ],
    },
  ];

  return useRoutes(routes);
};
