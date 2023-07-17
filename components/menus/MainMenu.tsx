// Bottom menu with icons etc.
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import { NextLinkComposed } from "./Link";
import styled from "@emotion/styled";

const StyledBottomNav = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const MainMenu: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState(0);

  console.log({ menuIndex: menuIndex });

  return (
    <StyledBottomNav
      showLabels
      value={menuIndex}
      onChange={(event, newValue) => {
        console.log({ newValue });
        setMenuIndex(newValue);
      }}
    >
      <BottomNavigationAction
        component={NextLinkComposed}
        to={{ pathname: "/" }}
        label="Accueil"
        icon={<RestoreIcon />}
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
