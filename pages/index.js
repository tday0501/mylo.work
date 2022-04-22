import Layout from "../components/organisms/Layout";
import styles from "../styles/Home.module.css";
import {
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  ALL_IN_ONE_SPACE,
  TRANSFORM_THE_WAY,
  TRY_MYLO,
  YOUR_PLACE,
} from "../utils/stringConstants";
import Title from "../components/molecules/Head";
import Image from "next/image";
import Button from '../components/molecules/Button'

export default function Home() {
  return (
    // <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Title />
        <Layout>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            className={styles.gridContainer}
          >
            <Grid item className={styles.box}>
              <Box>
                <Typography variant="h1">
                  {YOUR_PLACE}
                  <br />
                  {ALL_IN_ONE_SPACE}
                </Typography>
              </Box>
              <Box className={styles.padding}>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Box>
              <Button
                href="/try-mylo"
                style={{
                  border: "1px solid #e06277",
                  padding: "4px 24px"
                }}
              >
                {TRY_MYLO}
              </Button>
            </Grid>
            <Box id={styles.img}></Box>
            {/* <Image
              alt=""
              height={435}
              id={styles.img}
              src="/images/image.png"
              width={676}
            /> */}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.gridContainer}
          >
            <Grid item className={styles.box}>
              <Box>
                <Typography variant="h4">
                  Enabling teams to do
                  <br />
                  their best work
                </Typography>
              </Box>
              <Box className={styles.padding}>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Box>
            </Grid>
            <Box id={styles.img}></Box>
            {/* <Image
              alt=""
              height={435}
              id={styles.img}
              src="/images/image.png"
              width={676}
            /> */}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.gridContainer}
          >
            <Grid item className={styles.box}>
              <Box>
                <Typography variant="h4">
                  What you need, <br /> when you need it
                </Typography>
              </Box>
              <Box className={styles.padding}>
                <Typography variant="subtitle1">
                  Spend less time shuffling tabs with a comprehensive dashboard
                  configuration and all your work tools at your fingertips.
                </Typography>
              </Box>
            </Grid>
            <Box id={styles.img}></Box>
            {/* <Image
              alt=""
              height={435}
              id={styles.img}
              src="/images/image.png"
              width={676}
            /> */}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.gridContainer}
          >
            <Grid item className={styles.box}>
              <Box>
                <Typography variant="h4">
                  {YOUR_PLACE}
                  <br />
                  {ALL_IN_ONE_SPACE}
                </Typography>
              </Box>
              <Box className={styles.padding}>
                <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
              </Box>
            </Grid>
            <Box id={styles.img}></Box>
            {/* <Image
              alt=""
              height={435}
              id={styles.img}
              src="/images/image.png"
              width={676}
            /> */}
          </Grid>
        </Layout>
      </div>
    // </ThemeProvider>
  );
}
