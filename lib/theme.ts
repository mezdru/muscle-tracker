import {
  Shadows,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

const palette = {
  primary: {
    main: "#CBFB77",
    dark: "#080D07",
    light: "#EDF6FD",
  },
  secondary: {
    main: "#262626",
  },
};

const shadows: Shadows = [
  "none",
  "5px 17px 32px rgba(203, 251, 119, 0.20)", // drop green
  "5px 17px 32px rgba(237, 246, 253, 0.20)", // drop white
  "rgba(100, 100, 111, 0.1) 3px 3px 12px 4px",
  "10px 15px 60px rgba(0, 0, 0, 0.25)",
  "20px 55px 60px rgba(0, 0, 0, 0.25)",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
];

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: '"Karla", sans-serif',
      h1: {
        lineHeight: 0.8,
        fontSize: "2.5rem",
        fontFamily: '"Paytone One", sans-serif',
        color: palette.primary.light,
      },
      h2: {
        lineHeight: 0.8,
        fontSize: "2rem",
        fontFamily: '"Paytone One", sans-serif',
        margin: "1.5rem 0",
      },
      h3: {
        fontSize: "1.5rem",
        fontFamily: '"Karla", sans-serif',
        textTransform: "uppercase",
        fontWeight: 500,
        color: palette.primary.dark,
      },
      body1: {
        fontFamily: '"Karla", sans-serif',
        color: palette.primary.light,
      },
      body2: {
        fontFamily: '"Karla", sans-serif',
        color: palette.secondary.main,
        fontStyle: "italic",
      },
      button: {
        fontSize: "16px",
        fontFamily: '"Paytone One", sans-serif',
        color: palette.primary.dark,
      },
    },
    palette: palette,
    shadows: shadows,
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            margin: "1rem 0",
            boxShadow: shadows[1],
            "&::before": {
              content: '""',
              display: "block",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "17.5px 6px 17.5px 0",
              borderColor: `transparent ${palette.primary.main} transparent transparent`,
              position: "absolute",
              left: "-6px",
            },
            "&::after": {
              content: '""',
              display: "block",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "17.5px 0 17.5px 6px",
              borderColor: `transparent transparent transparent ${palette.primary.main}`,
              position: "absolute",
              right: "-6px",
            },
          },
          text: {
            textTransform: "initial",
          },
          outlined: {
            borderColor: palette.primary.dark,
            color: palette.primary.dark,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: palette.primary.light,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            padding: 16,
            borderRadius: 16,
            boxShadow: shadows[2],
            background: palette.primary.light,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            background: palette.primary.dark,
            color: palette.primary.light,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {},
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            color: palette.primary.dark,
            background: palette.primary.light,
            boxShadow: shadows[2],
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: palette.primary.main,
            background: palette.primary.dark,
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: palette.primary.light,
            "&.Mui-selected": {
              "& svg": {
                display: "none",
              },
            },
          },
          label: {
            display: "none",
            "&.Mui-selected": {
              fontFamily: "Paytone One, sans-serif",
              position: "relative",
              display: "inline-block",
              color: palette.primary.main,
              textTransform: "uppercase",
              marginTop: "-5px",
              "&::before": {
                background: palette.primary.main,
                width: "8px",
                height: "8px",
                content: "''",
                position: "absolute",
                top: "22px",
                left: "50%",
                marginLeft: "-2.5px",
                display: "inline-block",
                borderRadius: "50%",
              },
            },
          },
        },
      },
    },
  })
);
