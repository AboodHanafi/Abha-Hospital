import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./screens/home";
import LabReports from "./screens/testReports";
import SignIn from "./screens/signin";
import TestComp from "./screens/test";
import VitalSigns from "./screens/vitalSigns";
import InsuranceApprovment from "./screens/InsuranceApprovement";
import SickLeave from "./screens/sickLeave";
import PrescriptionList from "./screens/PrescriptionList";
import Appointment from "./screens/appontment";
import Invoices from "./screens/invoices";
import MyFamily from "./screens/myFamily";
import MyDoctors from "./screens/myDoctors";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Layout>
        <CssBaseline />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/vital-signs"} element={<VitalSigns />} />
          <Route path={"/lab-reports"} element={<LabReports />} />
          <Route path={"/rad-reports"} element={<LabReports />} />
          <Route path={"/my-doctors"} element={<MyDoctors />} />
          <Route
            path={"/Insurance-approvment"}
            element={<InsuranceApprovment />}
          />
          <Route path={"/sick-leave"} element={<SickLeave />} />
          <Route path={"/prescription-list"} element={<PrescriptionList />} />
          <Route path={"/next-appointments"} element={<Appointment />} />
          <Route path={"/previous-appointments"} element={<Appointment />} />
          <Route path={"/invoices"} element={<Invoices />} />
          <Route path={"/my-family"} element={<MyFamily />} />
          <Route path={"/test"} element={<TestComp />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
