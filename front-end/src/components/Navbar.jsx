import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router';

function Navbar({ goBack }) {
  const history = useHistory();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {goBack ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
          ): (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Debts Traker
          </Typography>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;