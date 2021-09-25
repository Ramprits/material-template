import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`
    })
  })
});

export const { useGetPostsQuery } = postApi;
