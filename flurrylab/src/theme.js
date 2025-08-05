import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C5D3EB',
    },
    secondary: {
      main: '#1B345D',
    },
    background: {
      default: '#F2F4F4',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    heading: 'Rubik Bubbles, system-ui, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});
export default theme;