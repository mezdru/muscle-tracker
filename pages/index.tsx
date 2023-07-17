import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import StartTraining from "../components/buttons/StartTraining";

export const getStaticProps: GetStaticProps = async () => {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ];
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {};

const Index: NextPage = (props: Props) => {
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

export default Index;
