// Bottom menu with icons etc.
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import { NextLinkComposed } from "./Link";
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
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h1" color="secondary">
            Bonjour
          </Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{ width: 45, height: 45 }} />
        </Grid>
      </Grid>
    </StyledNavBar>
  );
};

export default AppBar;
