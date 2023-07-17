import styled from "@emotion/styled";
import { ButtonBase, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

import MainImg from "../../public/ressources/images/haltere_musculation.png";

const StyledButtonBase = styled(ButtonBase)`
  width: 100%;
`;

const StartTraining: React.FC = () => {
  const theme = useTheme();

  const Card = styled("div")`
    position: relative;
    background: ${theme.palette.primary.main};
    height: 150px;
    border-radius: 25px 50px 25px 50px;
    box-shadow: ${theme.shadows[5]};
  `;

  const StyledImgDiv = styled("div")`
    position: absolute;
    right: 0;
    margin-right: -60px;
    top: 50%;
    transform: translateY(-50%);
  `;

  const StyledText = styled(Typography)`
    position: relative;
    display: block;
    width: 50%;
    font-weight: 900;
    font-size: 1.2rem;
    padding: 16px;
    top: 50%;
    transform: translateY(-50%);
  `;

  return (
    <StyledButtonBase>
      <Grid container>
        <Grid item xs={10}>
          <Card>
            <StyledText variant="button" align="left">
              Commencer l'entrainement
            </StyledText>
            <StyledImgDiv>
              <Image
                src={MainImg}
                width="150px"
                height="90px"
                alt="Picture of a dumbell"
              />
            </StyledImgDiv>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </StyledButtonBase>
  );
};

export default StartTraining;
