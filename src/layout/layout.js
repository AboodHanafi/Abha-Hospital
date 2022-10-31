import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "../components/sideBar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, padding: "80px 300px" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
