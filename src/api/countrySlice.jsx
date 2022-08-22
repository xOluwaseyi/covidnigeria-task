import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countrySlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covidnigeria.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/api",
    }),
  }),
});

export const { useGetCountriesQuery } = countrySlice;
