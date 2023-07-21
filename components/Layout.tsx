import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Card, useTheme } from "@mui/material";
import Popup from "./Popup";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const theme = useTheme();
  const StyledBackground = styled("div")`
    background: ${theme.palette.primary.dark};
    color: ${theme.palette.primary.light};
  `;

  return (
    <StyledBackground>
      {props.children}
      {/* <Popup isOpen={true} title="Hello there">
        <Card>Hello</Card>
      </Popup> */}
    </StyledBackground>
  );
};

export default Layout;
