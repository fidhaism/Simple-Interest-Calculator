import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';

const Footer = () => {
  return (
    <Box className="footer" component="footer" sx={{ p: 2, mt: 4 }}>
      <Typography variant="body2" align="center">
        © 2024 Simple Interest Calculator. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
