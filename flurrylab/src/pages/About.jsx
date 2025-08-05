import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Title from '../components/design/Title';
import FlurryCard from '../components/design/Card';
import Section from '../components/design/Section';

export default function About() {
  return (
    <Box>
      <Section bgcolor="#ffffff" id="about">
        <Title>关于我们</Title>
        <Typography sx={{ mb: 4 }}>
          FlurryLab 致力于帮助个人与专业成长者在社区中找到属于自己的导师与伙伴。
        </Typography>
      </Section>

      <Section bgcolor="#F2F4F4">
        <Title>导师介绍</Title>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center">
          <FlurryCard title="导师 A" content="海外高校研究员，擅长 CS / AI / 留学指导" />
          <FlurryCard title="导师 B" content="跨国科技公司工程师，支持职业规划与简历提升" />
          <FlurryCard title="导师 C" content="社区创始人，专注连接资源与心理成长" />
        </Stack>
      </Section>
    </Box>
  );
}