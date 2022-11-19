import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "./authActions";

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
  reducers: {
    logOut: (state) => {
      state.isAuthed = false;
      localStorage.removeItem("userToken");
      localStorage.removeItem(Authed_Storage_Key);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {});
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.isAuthed = true;
      state.patientData = action.payload?.items;
      const token = action.payload?.items.token.split("|");
      state.userToken = token[1];
      localStorage.setItem("patientCode", state.patientData.p_code);
      localStorage.setItem("userToken", state.userToken);
      localStorage.setItem(Authed_Storage_Key, "1");
    });
    builder.addCase(signInThunk.rejected, (state, action) => {});
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
