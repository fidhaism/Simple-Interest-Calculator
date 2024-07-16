import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../App.css';

const Header = () => {
  return (
    <AppBar position="static" className="appbar header">
      <Toolbar>
        <Typography variant="h6">
          Simple Interest Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
