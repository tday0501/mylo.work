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
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#fcfcfc",
    color: "black",
    fontWeight: "bolder",
    fontSize: "21px",
    padding: "0px 180px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 60px",
    },
  },
  container: {
    backgroundColor: "#fcfcfc",
    [theme.breakpoints.up("lg")]: {
      padding: "148px 180px 0",
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: "90px 60px 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "90px 20px 0",
    },
  },
  centerLogo: {
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  showButton: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

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
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.container}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          className={classes.appbar}
        >
          <Toolbar className={classes.centerLogo}>
            <Link color="inherit" href="/" style={{ textDecoration: "none" }}>
              <Box
                alignItems="center"
                display="flex"
                style={{ padding: "0px" }}
              >
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
                className={classes.showButton}
              >
                {TRY_MYLO}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box
        height="100%"
        // px="108px" //not working
        // py="148px" //not working
        minHeight="calc(100vh - 220px)"
        style={{ paddingBottom: "98px", overflow: "hidden" }}
        width="100%"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
