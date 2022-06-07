import { ThemeProvider } from "@material-ui/core";
import React from "react";
import "../styles/global.css";
import { theme } from "../utils/theme";

function Mylo({ Component, pageProps }) {
  React.useEffect(()=> {
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="9ab2ab35-7b03-4622-8463-a51107a27a6b";
    (function(){
      d=document;
      s=d.createElement("script");
      s.src="https://client.crisp.chat/l.js";
      s.async=1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Mylo;
