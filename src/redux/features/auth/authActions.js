import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
        msg: "incorrect email or password",
      });
    }
  }
);

export const vitalSignsThunk = createAsyncThunk(
  "vitalSigns/user",
  async (thunkApi) => {
    try {
      const response = await axios.get(
        "http://aiph.me:8000/api/patient/PtVS?patientCode=0/372081&pageNo=1&offset=1&rows=5"
      );
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue({
        msg: e,
      });
    }
  }
);
