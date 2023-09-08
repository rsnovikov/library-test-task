import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api/baseApi.js";
import { rootReducer } from "./rootReducer.js";

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export const appStore = createStore();
