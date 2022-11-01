import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "../components/sideBar";
import NavBar from "../components/navBar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <SideBar />
      <Box
        component="main"
        bgcolor={"#F4F4F4"}
        sx={{ flexGrow: 1, minHeight: "100vh", padding: "80px 80px 0 320px" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
