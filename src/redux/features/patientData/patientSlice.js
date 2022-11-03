import { createSlice } from "@reduxjs/toolkit";
import { getPatientDataThunk } from "./patintActions";

const initialState = {
  patientData: {},
  pationtName: "",
};

export const vitalSignsSlice = createSlice({
  name: "vital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientDataThunk.pending, (state) => {});
    builder.addCase(getPatientDataThunk.fulfilled, (state, action) => {
      state.patientData = action.payload;
      if (action.payload.patientName) {
        state.patientName = action.payload.patientName;
      }
    });
    builder.addCase(getPatientDataThunk.rejected, (state, action) => {});
  },
});

export default vitalSignsSlice.reducer;
