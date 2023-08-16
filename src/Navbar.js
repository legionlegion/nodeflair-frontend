import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './home.css'
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#1fc76a' }}>
        <Toolbar>
          <img src="/images/nodeflair.png" style={{ maxHeight: '60px' }}></img>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            NodeFlair
          </Typography>
          <PersonOutlineIcon />
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;