import { createSlice } from "@reduxjs/toolkit";
import { getPatientDataThunk } from "./patintActions";

const initialState = {
  patientData: {},
  isLoading: true,
};

export const vitalSignsSlice = createSlice({
  name: "vital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientDataThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatientDataThunk.fulfilled, (state, action) => {
      state.patientData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPatientDataThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default vitalSignsSlice.reducer;
