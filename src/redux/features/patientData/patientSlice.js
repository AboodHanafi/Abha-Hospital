import { createSlice } from "@reduxjs/toolkit";
import { vitalSignsThunk } from "./patintActions";

const initialState = {
  patientData: [],
};

export const vitalSignsSlice = createSlice({
  name: "vital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(vitalSignsThunk.pending, (state) => {
      console.log("pending");
    });
    builder.addCase(vitalSignsThunk.fulfilled, (state, action) => {
      state.patientData = action.payload;
      console.log(state.patientData);
    });
    builder.addCase(vitalSignsThunk.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default vitalSignsSlice.reducer;
