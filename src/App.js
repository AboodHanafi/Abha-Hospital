import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/home";
import SignIn from "./screens/signin";
import VitalSigns from "./screens/vitalSigns";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Container maxWidth="xl">
        <CssBaseline />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/vital-signs"} element={<VitalSigns />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
