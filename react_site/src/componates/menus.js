import * as React from 'react';
import { BrowserRouter, HashRouter, Link, Navigate, Router } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';




export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <HashRouter   >

    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
      <List>
      <ListItem key="kadarcm Home" disablePadding >
          <a href="/" >
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="kadarcm Home" />
            </ListItemButton>
          </a> 
        </ListItem>

      <ListItem key="React Home" disablePadding >
          <Link to="/" reloadDocument >
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="React Home" />
            </ListItemButton>
          </Link> 
        </ListItem>
      <Divider />
        <ListItem key="calculator" disablePadding >
          <Link to="/calc/" reloadDocument >
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="clac" />
            </ListItemButton>
          </Link> 
        </ListItem>

        <ListItem key="tic Tac Toe" disablePadding >
        <Link to="/tic/" reloadDocument>
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="tictacto" />
            </ListItemButton>
            </Link>
        </ListItem>
          <Divider />
        <ListItem key="Login" disablePadding >
        <Link to="/login/" reloadDocument>
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="login page" />
            </ListItemButton>
            </Link>
        </ListItem>
      </List>
    </Box>

    </HashRouter>
  );

  return (
    <div>
    <Button onClick={toggleDrawer(true)} variant="contained" endIcon={<SendIcon />}>Apps</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
