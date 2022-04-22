import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import styles from "../../styles/Layout.module.css";
import Image from "next/image";
import { Box, Chip, Link } from "@material-ui/core";
import Button from '../molecules/Button'
import { TRY_MYLO } from "../../utils/stringConstants";
import { useRouter } from "next/router";
import Footer from "./Footer"

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
        <AppBar id={styles.appbar}>
          <Toolbar id={styles.toolbar}>
            <Link href="/" color="inherit" style={{ textDecoration: "none" }}>
              <Box id={styles.box}>
                <Image
                  src="/images/Logo.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
                <div className={styles.span}>Mylo</div>
                <Chip label="beta" variant="outlined" size="small" />
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
      <Toolbar />
      <Box id={styles.container}>{children}</Box>
      <Footer />
    </>
  );
}
