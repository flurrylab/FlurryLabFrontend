import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { spacing } from './Spacing';

export default function FlurryCard({ title, content }) {
  return (
    <Card sx={{ p: spacing.cardPadding, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
}