import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "../components/sideBar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", direction: "rtl" }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
