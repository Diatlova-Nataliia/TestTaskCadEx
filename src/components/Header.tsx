"use client";
import React from "react";
import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";

interface HeaderProps {
  href?: string;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 0;
`;

const StyledCompanyName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <StyledCompanyName>Some Company</StyledCompanyName>
      <StyledButton component="a" href="/form" variant="contained">
        Contact us
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
