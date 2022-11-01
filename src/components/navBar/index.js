import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/system";
import { AppBar, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{ padding: "5px 10px", paddingLeft: "320px", background: "#FFF" }}
      position="fixed"
      open={true}
    >
      <Stack direction="row" justifyContent="space-between">
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <NotificationsNoneIcon fontSize="large" />
          </IconButton>
          <Stack direction="row" alignItems={"center"}>
            <Typography color={"#0A0A0A"} fontSize="18px" fontWeight={600}>
              Jehad
            </Typography>
            <IconButton>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
