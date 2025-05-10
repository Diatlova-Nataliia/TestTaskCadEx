"use client";

import { styled as muiStyled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const StyledButton = muiStyled(Button)<ButtonProps>(({ theme }) => ({
  padding: "5px 47px",
  borderRadius: "8px",
  fontSize: "1.1rem",
  textTransform: "capitalize",
  backgroundColor: "#000",
  color: "#fff",
}));
