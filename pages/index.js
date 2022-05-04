import Layout from "../components/organisms/Layout";
import {
  BUILT_FOR,
  CURATE_SPACE,
  DONT_BE_BUSY,
  EASILY_SWITCH,
  SPEED_LESS_TIME,
  TRANSFORM_THE_WAY,
  TRY_MYLO,
  WHATS_TRULY,
  YOUR_PLACE,
} from "../utils/stringConstants";
import Title from "../components/molecules/Head";
import Image from "next/image";
import Button from "../components/molecules/button/Button";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
  },
  main: {
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column-reverse",
      textAlign: "center",
    },
  },
  typography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.25rem",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  function GridItem({ subtitle, subtext }) {
    return (
      <Grid
        alignItems="center"
        className={classes.grid}
        container
        direction="row"
        item
        justifyContent="space-between"
        spacing={4}
      >
        <Grid
          container
          direction="column"
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          spacing={2}
        >
          <Grid item lg={9}>
            <Typography variant="h4">{subtitle}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="subtitle1">{subtext}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box
            style={{
              height: "435px",
              maxWidth: "100%",
              minWidth: "200px",
              backgroundColor: "#40C5FF",
              borderRadius: "6px",
            }}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Title />
      <Layout>
        <Grid container spacing={10}>
          <Grid
            className={classes.main}
            container
            direction="row"
            item
            justifyContent="space-between"
            spacing={2}
          >
            <Grid
              container
              direction="column"
              item
              spacing={2}
              xs={12}
              sm={12}
              md={6}
              lg={4}
            >
              <Grid item>
                <Typography className={classes.typography} variant="h1">
                  {YOUR_PLACE}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Grid>
              <Grid item>
                <Button
                  href="/try-mylo"
                  style={{
                    border: "1px solid #e06277",
                    padding: "4px 24px",
                  }}
                >
                  {TRY_MYLO}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                style={{
                  height: "435px",
                  maxWidth: "100%",
                  minWidth: "200px",
                  backgroundColor: "#40C5FF",
                  borderRadius: "6px",
                }}
              />
              {/* <Image
              alt=""
              height={435}
              src="/images/image.png"
              width={676}
            /> */}
            </Grid>
          </Grid>
          <GridItem subtitle={BUILT_FOR} subtext={CURATE_SPACE} />
          <GridItem subtitle={WHATS_TRULY} subtext={SPEED_LESS_TIME} />
          <GridItem subtitle={DONT_BE_BUSY} subtext={EASILY_SWITCH} />
        </Grid>
      </Layout>
    </>
  );
}
