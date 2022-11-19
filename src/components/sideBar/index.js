import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Drawer, DrawerHeader } from "./style";
import { Collapse, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  familySideBarSection,
  firstSideBarSection,
  Images,
  myAppointmentSideBar,
  offersSideBar,
} from "../../assets";
import { useState } from "react";

export const ExpandableSideBarItem = ({ openSide, item, navigate }) => {
  const [openChildren, setOpenChildren] = useState(false);
  return (
    <>
      <ListItem
        key={item.id}
        disablePadding
        sx={{ display: "block" }}
        onClick={() => setOpenChildren(!openChildren)}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: openSide ? "initial" : "start ",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: openSide ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <img src={item.icon} alt="icon" />
          </ListItemIcon>

          <ListItemText
            primary={item.name}
            sx={{ opacity: openSide ? 1 : 0, color: "#fff" }}
          />
          <ListItemIcon sx={{ opacity: openSide ? 1 : 0 }}>
            {openChildren ? (
              <KeyboardArrowDownIcon sx={{ fill: "#FFF" }} />
            ) : (
              <KeyboardArrowUpIcon sx={{ fill: "#FFF" }} />
            )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      {openSide ? (
        <Collapse in={openChildren} timeout="auto" unmountOnExit>
          <List>
            {item.children.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: openSide ? "initial" : "center",
                    px: 10,
                  }}
                  onClick={() => navigate(item.path)}
                >
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: openSide ? 1 : 0, color: "#fff" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  );
};
export const SideBarItem = ({ openSide, menuItems, label, navigate }) => (
  <Stack>
    <Typography
      sx={{
        opacity: openSide ? 1 : 0,
      }}
      fontWeight={300}
      fontSize={"13px"}
      color={"#fff"}
      paddingLeft={5}
    >
      {label}
    </Typography>

    {menuItems.map((item) => {
      return item.children ? (
        <ExpandableSideBarItem
          key={item.id}
          openSide={openSide}
          navigate={navigate}
          item={item}
        />
      ) : (
        <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: openSide ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openSide ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src={item.icon} alt="icon" />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{ opacity: openSide ? 1 : 0, color: "#fff" }}
            />
          </ListItemButton>
        </ListItem>
      );
    })}
  </Stack>
);

const SideBar = ({ open }) => {
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <Divider />
      <Stack
        sx={{
          display: open ? "visible" : "none",
        }}
        alignItems={"center"}
        margin={"10px 0"}
      >
        <img width={"92px"} height={"80px"} src={Images.logo} alt="logo" />
      </Stack>

      <List>
        <SideBarItem
          navigate={navigate}
          menuItems={firstSideBarSection}
          label={"Medical File"}
          openSide={open}
        />
      </List>
      <List>
        <SideBarItem
          navigate={navigate}
          menuItems={familySideBarSection}
          label={"My Family"}
          openSide={open}
        />
      </List>
      <List>
        <SideBarItem
          navigate={navigate}
          menuItems={myAppointmentSideBar}
          label={"My Appointment"}
          openSide={open}
        />
      </List>
      <List>
        <SideBarItem
          navigate={navigate}
          menuItems={offersSideBar}
          label={"Offers"}
          openSide={open}
        />
      </List>
    </Drawer>
  );
};

export default SideBar;
