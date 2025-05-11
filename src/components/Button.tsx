"use client";

import { styled as muiStyled } from "@mui/material/styles";
import MuiButton, { ButtonProps } from "@mui/material/Button";

export const Button = muiStyled(MuiButton)<ButtonProps>(() => ({
  padding: "5px 47px",
  borderRadius: "8px",
  fontSize: "1.1rem",
  textTransform: "capitalize",
  backgroundColor: "#000",
  color: "#fff",
  height: "40px",
  whiteSpace: "nowrap",
}));
