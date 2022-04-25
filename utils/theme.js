import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5c7b',
      dark: '#e06277',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    h1: {
        fontSize: 64,
        fontWeight: 900,
    },
    h4: {
      fontSize: 30,
      fontWeight: 900,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      lineHeight: 1.4,
      fontSize: 20,
    },
    body1: {
      fontWeight: 500,
    },
  },
});
