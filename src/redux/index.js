import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import vitalSignsSlice from "./features/patientData/patientSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vitalSigns: vitalSignsSlice,
  },
});
