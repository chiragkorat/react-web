import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { images } from "../../config/images";
import Grid from '@mui/material/Grid';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
      left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="d-flex flex-column align-items-start ms-5"
    >
      <List>
        {['Product'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
           <img src={images.logo}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Product', 'Help', 'About','Careers'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <a href="#" className="btn header-btn text-decoratin-none text-start" style={{marginLeft:'12px', marginBottom:'10px'}}>
              Get the app
            </a>
            <Grid className="dropdown-qr  text-center  text-primary">
              <Grid className="dropdown-qrcode-img">
                <img src={images.qrCode} alt="" width="100%" />
              </Grid>
              <span className="download-text ">download</span>
              <i className="fa-solid fa-download ms-2" />
              {/* <i className="fa-solid fa-mobile  mobile-icon" /> */}
            </Grid>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i className="fa-solid fa-bars border border-primary rounded rounded-3 p-2" ></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
