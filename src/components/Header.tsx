"use client";
import React from "react";
import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import Container from "@/components/Container";
import { ContactUsButton } from "@/components/ContactUsButton";

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
  margin: 0;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container color="primary" as="header">
      <StyledHeader>
        <StyledCompanyName>Some Company</StyledCompanyName>
        <ContactUsButton></ContactUsButton>
      </StyledHeader>
    </Container>
  );
};

export default Header;
