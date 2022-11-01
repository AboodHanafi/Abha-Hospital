import { createSlice } from "@reduxjs/toolkit";
import { getPatientDataThunk } from "./patintActions";

const initialState = {
  patientData: {},
};

export const vitalSignsSlice = createSlice({
  name: "vital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientDataThunk.pending, (state) => {});
    builder.addCase(getPatientDataThunk.fulfilled, (state, action) => {
      state.patientData = action.payload;
    });
    builder.addCase(getPatientDataThunk.rejected, (state, action) => {});
  },
});

export default vitalSignsSlice.reducer;
