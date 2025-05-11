"use client";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "84px 0",
        }}
      >
        <StyledCopyright>Some Company 2024</StyledCopyright>
      </Box>
    </>
  );
};

export default Footer;
