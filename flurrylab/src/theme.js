import { createTheme } from '@mui/material/styles';
import { darken } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#e6d8ca' },
    secondary: { main: '#000' },
    background: { default: '#e6d8ca' },
  },
  typography: {
    fontFamily: '"Rubik Bubbles", system-ui, sans-serif',
    heading: '"Rubik Bubbles", system-ui, sans-serif',
  },
  shape: { borderRadius: 6 },
  spacing: 8,
  components: {
    // 全局 Reset 和 HTML 基本样式
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        '*': { boxSizing: 'border-box' },
        'img, video': { maxWidth: '100%', height: 'auto' },
        'html, body, #root': {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          backgroundColor: theme.palette.background.default,
          fontFamily: '"Rubik Bubbles", system-ui, sans-serif',
          scrollBehavior: 'smooth',
        },
        '@media (max-width:768px)': {
          ':root': { '--font-size-heading': '1.5rem' },
        },
        '@media (min-width:769px)': {
          ':root': { '--font-size-heading': '2.5rem' },
        },
      }),
    },

    // 全站按钮样式
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6,
          padding: '0.6em 1.2em',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': { backgroundColor: '#222' },
        },
        outlinedPrimary: {
          backgroundColor: 'transparent',
          color: '#000',
          border: '1px solid #000',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
        },
        containedInherit: {
          backgroundColor: '#e6d8ca',
          color: '#fff',
          '&:hover': { backgroundColor: '#222' },
        },
        textInherit: {
          backgroundColor: '#e6d8ca',
          color: '#fff',
        },
      },
    },

    // 圆角徽标 + 呼吸动画
    MuiTypography: {
      variants: [
        {
          props: { variant: 'roundedLogo' },
          style: {
            fontWeight: 'bold',
            color: '#000', // 黑色字体
            textShadow: '20px 20px 0px rgba(27, 52, 93, 0.5)', // 冷蓝色长阴影
          },
        },
      ],
    },
    
  },
});

export default theme;
