import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f7a63'
    },
    secondary: {
      main: '#f9a826'
    },
    background: {
      default: '#f5f7f6',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif'
  }
});

export default theme;
