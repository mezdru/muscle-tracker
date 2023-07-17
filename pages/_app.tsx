import { AppProps } from "next/app";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "../lib/createEmotionCache";
import { theme } from "../lib/theme";
import Head from "next/head";
import AppBar from "../components/menus/AppBar";
import MainMenu from "../components/menus/MainMenu";
import styled from "@emotion/styled";

export interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const StyledMain = styled("main")`
  padding: 16px;
  position: relative;
  height: calc(100vh - 56px);
`;

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: CustomAppProps) => {
  // TODO : Login access control => no login show welcome page
  // TODO : on welcome page, can click to login
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Muscle Tracker</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StyledMain>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AppBar />
              </Grid>

              <Grid item xs={12}>
                <Component {...pageProps} />
              </Grid>
            </Grid>
          </StyledMain>
          <MainMenu />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
