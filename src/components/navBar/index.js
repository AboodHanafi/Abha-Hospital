import { Avatar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AppBar } from "./style";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import BasicMenu from "../profileMenu";

const NavBar = ({ open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openProfile = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          backgroundColor: "#fff",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon
            fontSize="large"
            sx={{
              fill: "#0A0A0A",
            }}
          />
        </IconButton>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            cursor: "pointer",
          }}
        >
          <Avatar
            id="basic-button"
            aria-controls={openProfile ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
            onClick={handleClick}
            sx={{ bgcolor: deepOrange[500] }}
          >
            N
          </Avatar>
          <KeyboardArrowDownIcon
            sx={{
              fill: "#0A0A0A",
            }}
          />
          <BasicMenu
            open={openProfile}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
