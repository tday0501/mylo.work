import Layout from "../components/organisms/Layout";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  ALL_IN_ONE_SPACE,
  TRANSFORM_THE_WAY,
  TRY_MYLO,
  YOUR_PLACE,
} from "../utils/stringConstants";
import Title from "../components/molecules/Head";
import Image from "next/image";
import Button from "../components/molecules/button/Button";

export default function Home() {
  return (
    <>
      <Title />
      <Layout>
        <Grid container spacing={10}>
          <Grid container direction="row" item justifyContent="space-between">
            <Grid container direction="column" item spacing={2} xs={5}>
              <Grid item>
                <Typography variant="h1">
                  {YOUR_PLACE}
                  <br />
                  {ALL_IN_ONE_SPACE}
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
            <Grid item>
              <Box
                style={{
                  height: "435px",
                  width: "676px",
                  backgroundColor: "#40C5FF",
                  borderRadius: "6px",
                }}
              />
            </Grid>
          </Grid>
          {/* <Image
              alt=""
              height={435}
              src="/images/image.png"
              width={676}
            /> */}
          <Grid
            alignItems="center"
            container
            direction="row"
            item
            justifyContent="space-between"
          >
            <Grid container direction="column" item spacing={2} xs={5}>
              <Grid item>
                <Typography variant="h4">
                  Enabling teams to do
                  <br />
                  their best work
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                style={{
                  height: "435px",
                  width: "676px",
                  backgroundColor: "#40C5FF",
                  borderRadius: "6px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            direction="row"
            item
            justifyContent="space-between"
          >
            <Grid container direction="column" item spacing={2} xs={5}>
              <Grid item>
                <Typography variant="h4">
                  What you need, <br /> when you need it
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Spend less time shuffling tabs with a comprehensive dashboard
                  configuration and all your work tools at your fingertips.
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                style={{
                  maxHeight: "435px",
                  width: "676px",
                  backgroundColor: "#40C5FF",
                  borderRadius: "6px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            direction="row"
            item
            justifyContent="space-between"
          >
            <Grid container direction="column" item spacing={2} xs={5}>
              <Grid item>
                <Typography variant="h4">
                  {YOUR_PLACE}
                  <br />
                  {ALL_IN_ONE_SPACE}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                style={{
                  height: "435px",
                  width: "676px",
                  backgroundColor: "#40C5FF",
                  borderRadius: "6px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
