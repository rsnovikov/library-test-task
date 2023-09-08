import "@/shared/base.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ModalProvider from "../shared/hooks/useModal/useModal.jsx";
import { appRouter } from "./appRouter.jsx";
import { appStore } from "./appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <ModalProvider>
        <RouterProvider router={appRouter} />
      </ModalProvider>
    </ReduxProvider>
  </React.StrictMode>
);
