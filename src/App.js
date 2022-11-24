import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
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
import LayOut from "./layout";
import InsuranceApprovmentDetails from "./screens/InsuranceApprovement/details";
import PrescriptionDetails from "./screens/PrescriptionList/prescriptionDetails";
import WithAuth from "./components/auth";
import SignInSide from "./screens/signin/test";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <LayOut>
        <CssBaseline />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/signin"} element={<SignInSide />} />
          <Route
            path={"/vital-signs"}
            element={
              <WithAuth>
                <VitalSigns />
              </WithAuth>
            }
          />
          <Route
            path={"/lab-reports"}
            element={
              <WithAuth>
                <LabReports />
              </WithAuth>
            }
          />
          <Route
            path={"/rad-reports"}
            element={
              <WithAuth>
                <LabReports />
              </WithAuth>
            }
          />
          <Route
            path={"/my-doctors"}
            element={
              <WithAuth>
                <MyDoctors />
              </WithAuth>
            }
          />
          <Route
            path={"/Insurance-approvment"}
            element={
              <WithAuth>
                <InsuranceApprovment />
              </WithAuth>
            }
          />
          <Route
            path={"/Insurance-approvment/:id"}
            element={
              <WithAuth>
                <InsuranceApprovmentDetails />
              </WithAuth>
            }
          />
          <Route
            path={"/sick-leave"}
            element={
              <WithAuth>
                <SickLeave />
              </WithAuth>
            }
          />
          <Route
            path={"/prescription-list"}
            element={
              <WithAuth>
                <PrescriptionList />{" "}
              </WithAuth>
            }
          />
          <Route
            path={"/prescription/:id"}
            element={
              <WithAuth>
                <PrescriptionDetails />{" "}
              </WithAuth>
            }
          />
          <Route
            path={"/next-appointments"}
            element={
              <WithAuth>
                <Appointment />{" "}
              </WithAuth>
            }
          />
          <Route
            path={"/previous-appointments"}
            element={
              <WithAuth>
                <Appointment />{" "}
              </WithAuth>
            }
          />
          <Route
            path={"/invoices"}
            element={
              <WithAuth>
                <Invoices />{" "}
              </WithAuth>
            }
          />
          <Route
            path={"/my-family"}
            element={
              <WithAuth>
                <MyFamily />{" "}
              </WithAuth>
            }
          />
          {/* <Route path={"/test"} element={<TestComp />} /> */}
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
}

export default App;
