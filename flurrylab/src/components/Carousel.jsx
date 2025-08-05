import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/carousel1.jpg';
import img2 from '../assets/carousel2.jpg';
import img3 from '../assets/carousel3.jpg';

const items = [
  {
    image: img1,
    title: '导师介绍',
    path: '/about#mentors'
  },
  {
    image: img2,
    title: '互动分享',
    path: '/about#sharing'
  },
  {
    image: img3,
    title: '立即注册',
    path: '/contact#register'
  }
];

export default function ImageCarousel() {
  const navigate = useNavigate();

  return (
    <Box mt={8}>
      <Carousel indicators={false} navButtonsAlwaysVisible>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: 300,
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box textAlign="center" bgcolor="rgba(0,0,0,0.5)" color="white" px={3} py={2} borderRadius={2}>
              <Typography variant="h5" gutterBottom>{item.title}</Typography>
              <Button variant="contained" onClick={() => navigate(item.path)}>
                查看详情
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}