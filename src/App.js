import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import Layout from "./layout/layout";
import HomePage from "./screens/home";
import SignIn from "./screens/signin";
import TestComp from "./screens/test";
import VitalSigns from "./screens/vitalSigns";

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
          <Route path={"/test"} element={<TestComp />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
