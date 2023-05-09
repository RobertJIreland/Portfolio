import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import SouthIcon from "@mui/icons-material/South";

const sidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    icon: <CodeIcon />,
    cName: "nav-text",
  },
  {
    title: "Works",
    icon: <WorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    icon: <PhoneIcon />,
    cName: "nav-text",
  },
];
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={!open ? styles.sidebarClosed : styles.sidebar}
    >
      <Box
        sx={{
          backgroundColor: "#573597",
          fontSize: "3rem",
          padding: "30px 15px",
          letterSpacing: 1,
          fontWeight: 300,
          textAlign: "center",
          color: "#F7FFF6",
        }}
      >
        <p>RI</p>
      </Box>
      <List
        component="nav"
        sx={{
          padding: "26px",
        }}
      >
        {sidebarData.map((item, index) => {
          return (
            <ListItem
              key={index}
              sx={[
                {
                  color: "#F7FFF6",
                },
                {
                  "&:hover": {
                    backgroundColor: "#9175D1",
                    boxShadow: 10,
                    borderRadius: 2,
                  },
                },
              ]}
            >
              <ListItemIcon
                sx={{
                  color: "#F7FFF6",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                className={!open ? styles.sidebarTextClosed : item.cName}
              />
            </ListItem>
          );
        })}
      </List>
      <Box>
        <SouthIcon />
      </Box>
    </Box>
  );
}
