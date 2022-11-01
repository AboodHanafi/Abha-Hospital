import {
  familySideBarSection,
  firstSideBarSection,
  myAppointmentSideBar,
  offersSideBar,
} from "../../assets";
import MuiDrawer from "@mui/material/Drawer";
import { Collapse, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const ExpandableSideBarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          justifyContent={"flex-start"}
          alignItems={"center"}
          direction={"row"}
          key={item.id}
          spacing={1}
          padding={1}
          sx={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          <img width={"20px"} src={item.icon} alt={item.name} />
          <Typography fontWeight={600} fontSize={"13px"} color={"#F4F4F4"}>
            {item.name}
          </Typography>
        </Stack>
        {open ? (
          <KeyboardArrowDownIcon sx={{ fill: "#FFF" }} />
        ) : (
          <KeyboardArrowUpIcon sx={{ fill: "#FFF" }} />
        )}
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {item.children.map((item) => (
          <Typography
            paddingX={5}
            paddingY={0.5}
            fontWeight={300}
            fontSize={"13px"}
            color={"#F4F4F4"}
            sx={{
              cursor: "pointer",
            }}
          >
            {item.name}
          </Typography>
        ))}
      </Collapse>
    </>
  );
};
const SideBarItem = ({ menuItems, label }) => (
  <Stack>
    <Typography fontWeight={300} fontSize={"13px"} color={"#fff"}>
      {label}
    </Typography>

    {menuItems.map((item) => {
      return item.children ? (
        <ExpandableSideBarItem item={item} />
      ) : (
        <Stack
          justifyContent={"flex-start"}
          alignItems={"center"}
          direction={"row"}
          key={item.id}
          spacing={1}
          padding={1}
          sx={{ cursor: "pointer" }}
        >
          <img width={"20px"} src={item.icon} alt={item.name} />
          <Typography fontWeight={600} fontSize={"13px"} color={"#F4F4F4"}>
            {item.name}
          </Typography>
        </Stack>
      );
    })}
  </Stack>
);

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <MuiDrawer
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#0E4C8F",
          width: "300px",
          padding: "100px 20px 0",
        },
      }}
      variant="permanent"
      open={true}
    >
      <Stack spacing={3}>
        <SideBarItem menuItems={firstSideBarSection} label={"Medical File"} />

        <SideBarItem menuItems={familySideBarSection} label={"My family"} />
        <SideBarItem
          menuItems={myAppointmentSideBar}
          label={"My Appointment"}
        />

        <SideBarItem menuItems={offersSideBar} label={"Offers"} />
      </Stack>
    </MuiDrawer>
  );
};

export default SideBar;
