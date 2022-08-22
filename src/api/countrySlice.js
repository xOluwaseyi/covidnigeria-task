import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countrySlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covidnigeria.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/todos",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Todos"],
    }),
  }),
});

export const { useGetCountries } = countrySlice;
