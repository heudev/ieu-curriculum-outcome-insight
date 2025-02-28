import { createSlice } from "@reduxjs/toolkit";
import {fetchForms} from "../thunks/formThunks.ts";

// 🔹 (NgRx 'Reducer')
const formSlice = createSlice({
  name: "form",
  initialState: {
    forms: [],
    loading: false,
    error: null as string | null,
  },
  //sync processes
  reducers: {},
  //async processes
  extraReducers: (builder) => {
    builder
      .addCase(fetchForms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForms.fulfilled, (state, action) => {
        state.loading = false;
        state.forms = action.payload.data;
      })
      .addCase(fetchForms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default formSlice.reducer;
