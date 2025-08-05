import React from 'react';
import { Box } from '@mui/material';
import { spacing } from './Spacing';

export default function Section({ children, bgcolor = 'transparent' }) {
  return (
    <Box sx={{ px: 4, py: 6, bgcolor, gap: spacing.elementGap }}>
      {children}
    </Box>
  );
}