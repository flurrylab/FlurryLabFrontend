import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box textAlign="center" py={2}>
      <Typography variant="body2" color='secondary' sx={{ fontFamily: 'heading' }}>
        © 2025 FlurryLab. All rights reserved.
      </Typography>
    </Box>
  );
}