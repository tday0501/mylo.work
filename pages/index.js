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
  video: {
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "700px",
    width: "98%",
  },
}));

export default function Home() {
  const classes = useStyles();

  function GridItem({ imageAlt, imageSrc, subtitle, subtext, videoSrc }) {
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
          <Grid item lg={12}>
            <Typography variant="h4">{subtitle}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="subtitle1">{subtext}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} justifyContent="flex-end">
          {imageSrc ? (
            <Image alt={imageAlt} height={700} priority src={imageSrc} width={1100} />
          ) : (
            <Box>
              <video autoPlay playsInline loop muted className={classes.video}>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          )}
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
              alignContent="center"
              container
              direction="column"
              item
              spacing={2}
              style={{ textAlign: "center" }}
            >
              <Grid item>
                <Typography className={classes.typography} variant="h1">
                  {YOUR_PLACE}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Grid>
              <Grid item style={{ margin: "3rem" }}>
                <Button
                  href="/try-mylo"
                  style={{
                    border: "1px solid #e06277",
                    padding: "8px 48px",
                  }}
                >
                  {TRY_MYLO}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <GridItem
            imageAlt="Built for you image"
            imageSrc={"https://s3.us-east-2.amazonaws.com/mylo.work/Built+for+you.png"}
            subtitle={BUILT_FOR}
            subtext={CURATE_SPACE}
          />
          <GridItem
            imageAlt="Truly important image"
            imageSrc={"https://s3.us-east-2.amazonaws.com/mylo.work/Truly+Important.png"}
            subtitle={WHATS_TRULY}
            subtext={SPEED_LESS_TIME}
          />
          <GridItem
            subtitle={DONT_BE_BUSY}
            subtext={EASILY_SWITCH}
            videoSrc="https://s3.us-east-2.amazonaws.com/mylo.work/Be+Productive.mp4"
          />
        </Grid>
      </Layout>
    </>
  );
}
