import React, { ReactNode } from "react";
import { Dialog, DialogTitle, Grid, IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  title: string;
};

const Popup: React.FC<Props> = (props) => {
  return (
    <Dialog open={props.isOpen} onClose={() => {}} fullScreen={true}>
      <Grid container alignItems="center" padding={2}>
        <Grid flex={1} item>
          <IconButton aria-label="back">
            <ArrowBackIos />
          </IconButton>
        </Grid>
        <DialogTitle variant="h1">{props.title}</DialogTitle>
        <Grid flex={1} item />
      </Grid>

      <Grid container padding={4}>
        <Grid item>{props.children}</Grid>
      </Grid>
    </Dialog>
  );
};

export default Popup;
