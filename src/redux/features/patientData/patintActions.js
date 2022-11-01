import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPatientDataThunk = createAsyncThunk(
  "patientData/user",
  async ({ url }, thunkApi) => {
    const patientCode = localStorage.getItem("patientCode");
    try {
      const { data } = await axios.get(
        `http://aiph.me:8000/api/patient/${url}`,
        {
          params: {
            patientCode,
            pageNo: 1,
            offset: 1,
            rows: 100,
          },
        }
      );
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue({
        msg: e,
      });
    }
  }
);

// export const labReportsThunk = createAsyncThunk(
//   "vitalSigns/user",
//   async (thunkApi) => {
//     const patientCode = localStorage.getItem("patientCode");
//     try {
//       const { data } = await axios.get("http://aiph.me:8000/api/patient/PtVS", {
//         params: {
//           patientCode,
//           pageNo: 1,
//           offset: 1,
//           rows: 100,
//         },
//       });

//       return data.vitalSigns;
//     } catch (e) {
//       return thunkApi.rejectWithValue({
//         msg: e,
//       });
//     }
//   }
// );
