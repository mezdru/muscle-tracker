import React from "react";
import { NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import StartTraining from "../components/buttons/StartTraining";

const Home: NextPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StartTraining />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2">Vos derniers entrainements</Typography>
      </Grid>

      <Grid item xs={12}>
        List
      </Grid>
    </Grid>
  );
};

export default Home;
