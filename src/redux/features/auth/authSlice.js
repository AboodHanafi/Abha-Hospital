import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, vitalSignsThunk } from "./authActions";

let Authed_Storage_Key = "authed";
const initialState = {
  isAuthed: localStorage.getItem(Authed_Storage_Key) ? true : false,
  patientData: {},
  userToken: "",
  errorMsg: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {});
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      console.log(
        "🚀 ~ file: authSlice.js ~ line 19 ~ builder.addCase ~ action",
        action
      );
      state.isAuthed = true;
      state.patientData = action.payload?.items;
      const token = action.payload?.items.token.split("|");
      state.userToken = token[1];
      localStorage.setItem("patientCode", state.patientData.p_code);
      localStorage.setItem("userToken", state.userToken);
      localStorage.setItem(Authed_Storage_Key, "1");
    });
    builder.addCase(signInThunk.rejected, (state, action) => {});
    builder.addCase(vitalSignsThunk.pending, (state) => {});
    builder.addCase(vitalSignsThunk.fulfilled, (state, action) => {
      console.log(
        "🚀 ~ file: authSlice.js ~ line 19 ~ builder.addCase ~ action",
        action
      );
    });
    builder.addCase(vitalSignsThunk.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
