"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "times-new-roman",
    h1: { fontFamily: "times-new-roman" },
    h2: { fontFamily: "times-new-roman" },
    body1: { fontFamily: "times-new-roman" },
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
});

export default theme;
