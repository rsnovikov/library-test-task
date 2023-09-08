import { baseApi } from "@/shared/api/baseApi.js";

const baseUri = "/categories";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: ({ limit, page }) => ({
        url: baseUri,
        method: "GET",
        params: { limit, page },
      }),
      transformResponse(res, meta) {
        return { data: res, totalCount: Number(meta.response.headers.get("X-Total-Count")) };
      },
    }),
  }),
});
