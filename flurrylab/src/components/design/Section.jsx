// Section.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import { spacing } from './Spacing';

export default function Section({
  children,
  bgcolor = 'transparent',
  pt = 10, // 默认 padding-top = theme.spacing(10) → 80px
  pb = 10  // 默认 padding-bottom = theme.spacing(10) → 80px
}) {
  return (
    <Box sx={{ bgcolor, pt, pb }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.elementGap
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}
