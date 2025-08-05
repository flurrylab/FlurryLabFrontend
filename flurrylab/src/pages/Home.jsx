import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Title from '../components/design/Title';
import Section from '../components/design/Section';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <Box>
      <Section bgcolor="#C5D3EB">
        <Title>让成长不再独行</Title>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          FlurryLab: Real Connection. Real Growth.
        </Typography>
        <Typography align="center" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          我们是一个致力于连接真实关系的成长平台。提供学习资源、导师指导与社区支持，帮助你在成长道路上更进一步。
          <br />
          A community-driven platform that empowers personal and professional growth through real connection, mentorship, and resources.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="contained" color="secondary" href="#join">立即加入</Button>
          <Button variant="outlined" color="secondary" href="#about">了解更多</Button>
        </Stack>
      </Section>

      <Section>
        <Carousel />
      </Section>
    </Box>
  );
}