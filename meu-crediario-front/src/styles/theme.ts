import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    colors: Record<string, string>;
  }

  interface ThemeOptions {
    colors?: Theme["colors"];
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 265,
      sm: 500,
      md: 900,
      lg: 1420,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#006151",
      light: "#00856E",
      dark: "#004A3F",
    },
    secondary: {
      main: "#01865F",
      light: "#02E09F",
      dark: "#016F4F",
    },
  },
  colors: {
    primaryLightest: "#8CBFB7",
    white: "#FFFFFF",
    whiteDark: "#F5F5F5",
    grayLight: "#DDDDDD",
    gray: "#CCCCCC",
    grayDark: "#BBBBBB",
    grayDarkest: "#333333",
    background: "#F1F6F5",
    text: "#505050",
    infoLightest: "#EAF4FB",
    info: "#0066AB",
    infoDark: "#003D66",
    successLightest: "#E6FFF7",
    successLight: "#D7F4F0",
    success: "#006151",
    successDark: "#004A3F",
    alertLightest: "#FFF9E5",
    alertLight: "#FFEBCC",
    alert: "#F6AB35",
    alertDark: "#734B0C",
    alertAltLightest: "#FFFAE0",
    alertAltLight: "#FEF5C8",
    alertAlt: "#FCD307",
    alertAltDark: "#5C4D00",
    dangerLightest: "#FFE5E6",
    danger: "#C91D1D",
    dangerDark: "#801212",
  },
  typography: {
    body1: {
      fontFamily: "Open Sans",
    },
    body2: {
      fontFamily: "Courier Prime",
    },
    caption: {
      fontFamily: "Roboto",
    },
  },
});
