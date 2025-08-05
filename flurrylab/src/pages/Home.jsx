import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import glossy from '../assets/glossy.jpg'; // 确保路径正确
export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px - 64px)', // 减去 Navbar 和 Footer 高度（假设64px）
      }}
    >
      {/* 外层相对定位 */}
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        {/* 图片 */}
        <Box
          component="img"
          src={glossy}
          alt="中心图片"
          sx={{
            width: '100%',         // 占满父容器宽度
            maxWidth: '80vw',      // 最大宽度不超过 80% 视口宽度
            height: 'auto',        // 按比例缩放
            maxHeight: '80vh',     // 最大高度不超过 80% 视口高度
            borderRadius: '16px',
            objectFit: 'cover',    // 保持比例并裁切溢出部分
            display: 'block',
          }}
        />
        
        {/* 浮动内容（文字 + 按钮） */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              className:"rounded-logo-text",
              fontWeight: 'bold',
              mb: 3,
              
            }}
          >
            让成长不再独行
          </Typography>

          {/* 按钮组 */}
          <Stack direction="row" spacing={3} justifyContent="center">
            <Button variant="contained" color="secondary" href="/contact#join">
              立即加入
            </Button>
            <Button variant="outlined" color="secondary" href="/about#about">
              了解更多
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
