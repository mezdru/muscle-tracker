import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const palette = {
  primary: {
    // main: "#D9FF97",
    // dark: "#D9FF97",
    main: "#cbfb77",
    dark: "#cbfb77",
  },
  secondary: {
    dark: "#121310",
    main: "#747474",
    light: "#F7F6F9",
  },
};

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontWeight: 900,
        lineHeight: 0.8,
        // fontSize: "2rem !important",
      },
    },
    palette: palette,

    components: {
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              margin: "-4px -4px 4px 4px",
              borderRadius: "25px 50px 25px 50px",
              backgroundColor: palette.secondary.dark,
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.4)",
            },
          },
          label: {
            "&.Mui-selected": {
              fontWeight: "bold",
            },
          },
        },
      },
    },
  })
);
