import { baseApi } from "@/shared/api/baseApi.js";
import { BOOKS_TAG } from "@/shared/api/tags.js";

const baseUri = "/books";

export const booksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => ({
        url: baseUri,
        method: "GET",
      }),
      providesTags: [BOOKS_TAG],
    }),
    removeBook: build.mutation({
      query: (id) => ({
        url: `${baseUri}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [BOOKS_TAG],
    }),
    addBook: build.mutation({
      query: (data) => ({
        url: baseUri,
        body: data,
        method: "POST",
      }),
      invalidatesTags: [BOOKS_TAG],
    }),
    updateBook: build.mutation({
      query: ({ data, id }) => ({
        url: `${baseUri}/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: [BOOKS_TAG],
    }),
  }),
});
