  // Title.jsx
  import React from 'react';
  import { Typography } from '@mui/material';
  
  export default function Title({ children, align = 'center', color = 'secondary.main' }) {
    return (
      <Typography variant="h4" align={align} sx={{ fontFamily: 'heading', color, mb: 3 }}>
        {children}
      </Typography>
    );
  }