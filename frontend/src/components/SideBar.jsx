import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkButton from "./LinkButton";
const SideBar = ({ open, toggleDrawer, name }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <Box
        color="#f55e61"
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <AccountCircleIcon fontSize="large" />
        <List>
          {name}
          <LinkButton title="로그아웃" link="/"/>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;