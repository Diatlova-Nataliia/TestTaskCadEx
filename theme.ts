"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Times New Roman",
    h1: { fontFamily: "Times New Roman" },
    h2: { fontFamily: "Times New Roman" },
    body1: { fontFamily: "Times New Roman" },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
});

export default theme;
