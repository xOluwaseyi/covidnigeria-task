import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "countries",
  initialState: { countries: [], toShow: false },
  reducer: {
    toggle: (state) => {
      state.toShow = !state.toShow;
    },
  },
});

export const countryActions = countrySlice.actions;

export default countrySlice;
