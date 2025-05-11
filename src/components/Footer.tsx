"use client";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Container from "@/components/Container";

const StyledCopyright = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Container color="primary" as="section">
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: {
            lg: "80px 0",
            sm: "48px 0",
            xs: "24px 0",
          },
        }}
      >
        <StyledCopyright>Some Company 2024</StyledCopyright>
      </Box>
    </Container>
  );
};

export default Footer;
