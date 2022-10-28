import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const vitalSignsThunk = createAsyncThunk(
  "vitalSigns/user",
  async (thunkApi) => {
    const patientCode = localStorage.getItem("patientCode");
    try {
      const { data } = await axios.get("http://aiph.me:8000/api/patient/PtVS", {
        params: {
          patientCode,
          pageNo: 1,
          offset: 1,
          rows: 5,
        },
      });

      return data.vitalSigns;
    } catch (e) {
      return thunkApi.rejectWithValue({
        msg: e,
      });
    }
  }
);
