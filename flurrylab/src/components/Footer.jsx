import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box textAlign="center" py={2} bgcolor="#f5f5f5">
      <Typography variant="body2" color="text.secondary">
        © 2025 FlurryLab. All rights reserved.
      </Typography>
    </Box>
  );
}