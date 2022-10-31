import { SideBarIcons } from "../../assets";
import MuiDrawer from "@mui/material/Drawer";
import { Divider, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("all", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: 0,
//     position: "fixed",
//   },
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//   width: 20,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(true && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <MuiDrawer
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#0E4C8F",
          width: "250px",
          padding: "120px 0",
        },
      }}
      variant="permanent"
      open={true}
    >
      {SideBarIcons.map((item) => {
        return (
          <Stack key={item.id}>
            <IconButton>{item.icon}</IconButton>
            <Divider />
          </Stack>
        );
      })}
    </MuiDrawer>
  );
};

export default SideBar;
