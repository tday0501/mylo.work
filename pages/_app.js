import { ThemeProvider } from "@material-ui/core";
import "../styles/globals.css";
import { theme } from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
