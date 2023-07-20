import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import styled from "@emotion/styled";

import createEmotionCache from "../lib/createEmotionCache";
import { theme } from "../lib/theme";
import AppBar from "../components/menus/AppBar";
import MainMenu from "../components/menus/MainMenu";
import Layout from "../components/Layout";

export interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const StyledMain = styled("main")`
  padding: 32px;
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
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Muscle Tracker</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital@0;1&family=Paytone+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
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
        </Layout>
        <MainMenu />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
