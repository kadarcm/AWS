import * as React from 'react';
import { Link } from "react-router-dom";
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
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key="calculator" disablePadding >
            <a href='/calc/'>
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="clac" />
            </ListItemButton>
           </a>
        </ListItem>
        <ListItem key="tic Tac Toe" disablePadding >
            <a href='/tic/'>
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="tictacto" />
            </ListItemButton>
            </a>
        </ListItem>
          <Divider />
        <ListItem key="Login" disablePadding >
            <a href='/login/'>
            <ListItemButton onClick={console.log("clicked me")}>
              <ListItemIcon> <InboxIcon />  </ListItemIcon>
              <ListItemText primary="login page" />
            </ListItemButton>
            </a>
        </ListItem>
      </List>
    </Box>
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
