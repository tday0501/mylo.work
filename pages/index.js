import Footer from "../components/organisms/Footer";
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
  TRANSFORM_THE_WAY_1,
  TRY_MYLO,
  YOUR_PLACE,
} from "../utils/stringConstants";
import Title from "../components/molecules/Head";
import { theme } from "../utils/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Title />
        <Layout>
          <Grid container direction="row">
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
                variant="contained"
                size="small"
                id={styles.button}
                href="/try-mylo"
                disableElevation
              >
                {TRY_MYLO}
              </Button>
            </Grid>
            {/* <Grid item xs>
              <Typography variant="h1">
                {YOUR_PLACE}
                <br />
                {ALL_IN_ONE_SPACE}
              </Typography>
              <Typography variant="subtitle1">{TRANSFORM_THE_WAY}</Typography>
            </Grid> */}
          </Grid>
        </Layout>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
