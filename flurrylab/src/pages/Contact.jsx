import React from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import Title from '../components/design/Title';
import Section from '../components/design/Section';

export default function Contact() {
  return (
    <Section bgcolor="#ffffff" id="join">
      <Title>注册加入</Title>
      <Typography align="center" sx={{ mb: 3 }}>
        欢迎成为 FlurryLab 社区一员，我们将尽快与您联系
      </Typography>
      <Box component="form" sx={{ maxWidth: 500, mx: 'auto' }}>
        <Stack spacing={2}>
          <TextField label="姓名" fullWidth required />
          <TextField label="邮箱" type="email" fullWidth required />
          <TextField label="留言" multiline rows={4} fullWidth />
          <Button variant="contained" color="secondary" type="submit">提交</Button>
        </Stack>
      </Box>
    </Section>
  );
}
