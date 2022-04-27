import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Image from "next/image";
import { AppBar, Box, Chip, Link, Toolbar } from "@material-ui/core";
import Button from "../molecules/button/Button";
import { TRY_MYLO } from "../../utils/stringConstants";
import { useRouter } from "next/router";
import Footer from "./Footer";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Layout({ children, tryMylo, ...props }) {
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{
            backgroundColor: "#fcfcfc",
            color: "black",
            fontWeight: "bolder",
            fontSize: "21px",
            padding: "8px 4em",
          }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Link color="inherit" href="/" style={{ textDecoration: "none" }}>
              <Box alignItems="center" display="flex">
                <Image
                  src="/images/Logo.svg"
                  alt="Mylo logo"
                  height={25}
                  width={25}
                />
                <Box p="8px">Mylo</Box>
                <Chip label="beta" size="small" variant="outlined" />
              </Box>
            </Link>
            {!tryMylo && (
              <Button
                href="/try-mylo"
                style={{
                  border: "1px solid #e06277",
                }}
              >
                {TRY_MYLO}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box>
        <Box
          bgcolor="#fcfcfc"
          height="100%"
          // px="108px" //not working
          // py="98px" //not working
          style={{ padding: "98px 108px" }}
          width="100%"
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
