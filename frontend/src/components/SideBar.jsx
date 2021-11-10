import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

const SideBar = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <Box
        color="#f55e61"
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List></List>
      </Box>
    </Drawer>
  );
};

export default SideBar;