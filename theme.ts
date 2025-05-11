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
      xs: 300,
      sm: 800,
      md: 900,
      lg: 1200,
      xl: 1536,
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
