import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage/index.js";
import { MainPage } from "../pages/MainPage/index.js";
import BaseLayout from "./layouts/BaseLayout/BaseLayout.jsx";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      { path: "/about", element: <AboutPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
]);
