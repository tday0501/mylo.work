import Layout from "../components/organisms/Layout";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  ALL_IN_ONE_SPACE,
  ENABLING_TEAMS,
  SPEED_LESS_TIME,
  THEIR_BEST_WORK,
  TRANSFORM_THE_WAY,
  TRY_MYLO,
  WHAT_YOU_NEED,
  WHEN_YOU_NEED,
  YOUR_PLACE,
} from "../utils/stringConstants";
import Title from "../components/molecules/Head";
import Image from "next/image";
import Button from "../components/molecules/button/Button";

export default function Home() {
  function GridItem({ subtitle1, subtitle2, subtext }) {
    return (
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
              {subtitle1}
              <br />
              {subtitle2}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{subtext}</Typography>
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
    );
  }

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
              {/* <Image
              alt=""
              height={435}
              src="/images/image.png"
              width={676}
            /> */}
            </Grid>
          </Grid>
          <GridItem
            subtitle1={ENABLING_TEAMS}
            subtitle2={THEIR_BEST_WORK}
            subtext={TRANSFORM_THE_WAY}
          />
          <GridItem
            subtitle1={WHAT_YOU_NEED}
            subtitle2={WHEN_YOU_NEED}
            subtext={SPEED_LESS_TIME}
          />
          <GridItem
            subtitle1={YOUR_PLACE}
            subtitle2={ALL_IN_ONE_SPACE}
            subtext={TRANSFORM_THE_WAY}
          />
        </Grid>
      </Layout>
    </>
  );
}
