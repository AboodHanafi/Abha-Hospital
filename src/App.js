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
          <Route
            path={"/Insurance-approvment"}
            element={<InsuranceApprovment />}
          />
          <Route path={"/test"} element={<TestComp />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
