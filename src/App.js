import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import SignIn from "./screens";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <SignIn />
      </Container>
    </ThemeProvider>
  );
}

export default App;
