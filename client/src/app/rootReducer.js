import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api/baseApi.js";

export const rootReducer = combineReducers({ [baseApi.reducerPath]: baseApi.reducer });
