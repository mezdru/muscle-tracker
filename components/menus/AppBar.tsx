import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledNavBar = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
`;

const AppBar: React.FC = () => {
  return (
    <StyledNavBar>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h1" color="primary.light">
            Muscle Tracker
          </Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{ width: 32, height: 32 }} />
        </Grid>
      </Grid>
    </StyledNavBar>
  );
};

export default AppBar;
