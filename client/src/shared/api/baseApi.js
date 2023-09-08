import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery.js";
import { BOOKS_TAG } from "./tags.js";

export const baseApi = createApi({
  reducerPath: "api",
  endpoints: () => ({}),
  baseQuery: baseQuery,
  tagTypes: [BOOKS_TAG],
});
