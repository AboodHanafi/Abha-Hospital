// import {
//   familySideBarSection,
//   firstSideBarSection,
//   myAppointmentSideBar,
//   offersSideBar,
// } from "../../assets";
// import MuiDrawer from "@mui/material/Drawer";
// import {
//   Collapse,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import { useState } from "react";

// const ExpandableSideBarItem = ({ item, navigate }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <List>
//         <ListItem
//           key={item.id}
//           disablePadding
//           sx={{ display: "block" }}
//           onClick={() => setOpen(!open)}
//         >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? "initial" : "center",
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : "auto",
//                 justifyContent: "center",
//               }}
//             >
//               <img src={item.icon} alt="icon" />
//             </ListItemIcon>

//             <ListItemText
//               primary={item.name}
//               sx={{ opacity: open ? 1 : 0, color: "#fff" }}
//             />
//           </ListItemButton>
//         </ListItem>
//         {open ? (
//           <KeyboardArrowDownIcon sx={{ fill: "#FFF" }} />
//         ) : (
//           <KeyboardArrowUpIcon sx={{ fill: "#FFF" }} />
//         )}
//       </List>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         {item.children.map((item) => (
//           <ListItem
//             key={item.id}
//             disablePadding
//             sx={{ display: "block" }}
//             onClick={() => setOpen(!open)}
//           >
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? "initial" : "center",
//                 px: 2.5,
//               }}
//               onClick={() => navigate(item.path)}
//             >
//               <ListItemText
//                 primary={item.name}
//                 sx={{ opacity: open ? 1 : 0, color: "#fff" }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </Collapse>
//     </>
//   );
// };
// const SideBarItem = ({ menuItems, label, navigate }) => (
//   <Stack>
//     <Typography fontWeight={300} fontSize={"13px"} color={"#fff"}>
//       {label}
//     </Typography>

//     {menuItems.map((item) => {
//       return item.children ? (
//         <ExpandableSideBarItem navigate={navigate} item={item} />
//       ) : (
//         <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? "initial" : "center",
//               px: 2.5,
//             }}
//             onClick={() => navigate(item.path)}
//           >
//             <ListItemText
//               primary={item.name}
//               sx={{ opacity: open ? 1 : 0, color: "#fff" }}
//             />
//           </ListItemButton>
//         </ListItem>
//       );
//     })}
//   </Stack>
// );

// const SideBar = () => {
//   const navigate = useNavigate();
//   return (
//     <MuiDrawer
//       sx={{
//         "& .MuiDrawer-paper": {
//           backgroundColor: "#0E4C8F",
//           width: "300px",
//           padding: "100px 20px 0",
//         },
//       }}
//       variant="permanent"
//       open={true}
//     >
//       <Stack spacing={3}>
//         <SideBarItem
//           navigate={navigate}
//           menuItems={firstSideBarSection}
//           label={"Medical File"}
//         />
//         <SideBarItem
//           navigate={navigate}
//           menuItems={familySideBarSection}
//           label={"My family"}
//         />
//         <SideBarItem
//           navigate={navigate}
//           menuItems={myAppointmentSideBar}
//           label={"My Appointment"}
//         />

//         <SideBarItem
//           navigate={navigate}
//           menuItems={offersSideBar}
//           label={"Offers"}
//         />
//       </Stack>
//     </MuiDrawer>
//   );
// };

// export default SideBar;
