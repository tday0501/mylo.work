import Head from "next/head";
import Layout from "../components/organisms/Layout";
import styles from "../styles/TryMylo.module.css";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { SIGN_UP } from "../utils/stringConstants";
import React from "react";
import axios from "axios";
import Button from "../components/molecules/Button";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    if (email) {
      axios
        .post(
          "https://7ikqn7jf39.execute-api.us-east-2.amazonaws.com/dev/beta",
          {
            useremail: email,
            username: name,
          }
        )
        .then(() => {
          setEmail("");
          setName("");
        })
        .catch((e) => {
          //TODO: add toast message on error
          console.log(e);
        });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Mylo - Your space in one place.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout tryMylo={true} style={styles.test}>
        <Grid
          alignItems="center"
          container
          direction="column"
          justifyContent="center"
        >
          <Typography variant="h4" id={styles.heading}>
            👋 Welcome!
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "1em" }}>
            It's great to have you with us! We're launching very soon.
          </Typography>
          <Box className={styles.box}>
            <Typography variant="h5">I,</Typography>
            <Box className={styles.input}>
              <TextField
                label="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Typography variant="h5">
              would love a beta invite! Please
            </Typography>
          </Box>
          <Box className={styles.box}>
            <Typography variant="h5">send me an invite @</Typography>
            <Box className={styles.input}>
              <TextField
                label="Your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                required
                type="email"
                value={email}
              />
            </Box>
            <Typography variant="h5">when Mylo is ready.</Typography>
          </Box>
          <Button
            fill
            onClick={handleSubmit}
            style={{
              margin: "2em",
              padding: "4px 100px",
            }}
          >
            {SIGN_UP}
          </Button>
        </Grid>
      </Layout>
    </div>
  );
}
