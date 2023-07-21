import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Card, Grid, Typography, Button, Chip, Box } from "@mui/material";
import { Timer } from "@mui/icons-material";

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
    <>
      <Grid container justifyContent="center">
        <Button variant="contained" endIcon={<Timer />}>
          M'entrainer
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2">Entrainements</Typography>
        <Card>
          <Grid container justifyContent="space-between">
            <Typography variant="h3">Pecs abdos</Typography>
            <Typography variant="body2">il y a 6 jours</Typography>
          </Grid>
          <Box sx={{ margin: ".75rem 0" }}></Box>
          <Chip label="5 exercices" />
        </Card>
      </Grid>
      <Box sx={{ margin: "2rem 0" }}></Box>

      <Grid item textAlign="center">
        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", fontSize: "18px", marginBottom: "-8px" }}
        >
          Vous n’avez pas de compte ?
        </Typography>
        <Button variant="text">Créer un compte</Button>
      </Grid>
    </>
  );
};

export default Index;
