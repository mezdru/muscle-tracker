// Bottom menu with icons etc.
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import { NextLinkComposed } from "./Link";
import styled from "@emotion/styled";

const MainMenu: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState(0);

  const theme = useTheme();
  const StyledBottomNav = styled(BottomNavigation)`
    position: fixed;
    background: ${theme.palette.secondary.main};
    bottom: 0;
    left: 0;
    width: 100%;
  `;

  return (
    <StyledBottomNav
      showLabels
      value={menuIndex}
      onChange={(event, newValue) => {
        setMenuIndex(newValue);
      }}
    >
      <BottomNavigationAction
        component={NextLinkComposed}
        to={{ pathname: "/" }}
        label="Accueil"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={NextLinkComposed}
        to={{ pathname: "/" }}
        label="Mes séances"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={NextLinkComposed}
        to={{ pathname: "/" }}
        label="Nearby"
        icon={<LocationOnIcon />}
      />
    </StyledBottomNav>
  );
};

export default MainMenu;
