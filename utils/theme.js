import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    h1: {
        fontSize: 64,
        fontWeight: 900,
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
