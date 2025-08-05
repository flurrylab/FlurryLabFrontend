import React from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import Title from '../components/design/Title';
import Section from '../components/design/Section';

export default function Contact() {
  return (
    <Section id="join">
      <Title>注册加入</Title>
      <Typography align="center" sx={{ mb: 3 }} color='secondary'>
        欢迎成为 FlurryLab 社区一员，我们将尽快与您联系
      </Typography>
      <Box component="form" sx={{ maxWidth: 500, mx: 'auto' }}>
        <Stack spacing={3}>
          <TextField label="姓名" fullWidth required />
          <TextField label="邮箱" type="email" fullWidth required />
          <TextField label="留言" multiline rows={4} fullWidth />
          <Button variant="contained" color="secondary" type="submit">提交</Button>
        </Stack>
      </Box>
    </Section>
  );
}