import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./CountrySlice";
import { createApi } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: { country: countrySlice.reducer },
});

export default store;
