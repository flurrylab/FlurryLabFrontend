import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Title from '../components/design/Title';
import FlurryCard from '../components/design/Card';
import Section from '../components/design/Section';

export default function About() {
  return (
    <Box>
      <Section id="about" pb={4}>
        <Title>关于我们</Title>
        <Typography align="center" sx={{ maxWidth: 700, mx: 'auto', mb: 1 }}  color='black' pt={0}>
        FlurryLab 是一个致力于连接真实关系的成长平台
        <br />
        提供学习资源、导师指导与社区支持，帮助你在成长道路上更进一步
        {/*
          <br />
          <br />
          <br />
          A community-driven platform that empowers personal and professional growth through real connection, mentorship, and resources.*/}
        </Typography>
      </Section>
      <Section pt={4}>
        <Title>导师介绍</Title>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" color='secondary' pt={0}>
          <FlurryCard title="导师 Claire" content="FAANG Senior MLE，擅长 CS / AI / 留学指导" />
          <FlurryCard title="导师 Jules" content="FAANG Senior SDE，文转码，支持职业规划与简历提升" />
          <FlurryCard title="导师 Alan" content="FAANG Staff MLE，社区创始人，专注技术blog与心理成长" />
        </Stack>
      </Section>
    </Box>
  );
}