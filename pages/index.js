import Layout from "../components/organisms/Layout";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import {
  ALL_IN_ONE_SPACE,
  TRANSFORM_THE_WAY,
  TRY_MYLO,
  YOUR_PLACE,
} from "../utils/stringConstants";
import Title from "../components/molecules/Head";
import { theme } from "../utils/theme";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Title />
        <Layout>
          <Grid container direction="row" justifyContent="space-between">
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
                disableElevation
                href="/try-mylo"
                id={styles.button}
                size="small"
                variant="contained"
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
        </Layout>
        
      </div>
    </ThemeProvider>
  );
}
