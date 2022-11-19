import { createAsyncThunk } from "@reduxjs/toolkit";
import CRUDRequsests from "../../../api";

export const signInThunk = createAsyncThunk(
  "signin/user",
  async ({ mobile, password }, thunkApi) => {
    try {
      const { data } = await CRUDRequsests.post("/patient-login", {
        mobile,
        password,
      });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue({
        msg: "incorrect number or password",
      });
    }
  }
);
