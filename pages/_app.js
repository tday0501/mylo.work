import { ThemeProvider } from "@material-ui/core";
import "../styles/global.css";
import { theme } from "../utils/theme";

function Mylo({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Mylo;
