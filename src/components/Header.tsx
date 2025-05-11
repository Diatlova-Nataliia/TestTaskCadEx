"use client";
import React from "react";
import styled from "styled-components";
import Container from "@/components/Container";
import { ContactUsButton } from "@/components/ContactUsButton";
import Link from "next/link";

interface HeaderProps {
  href?: string;
}

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 0;
`;

const StyledCompanyName = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
  text-decoration: none;

  &:visited {
    color: #000;
  }
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container color="primary" as="header">
      <StyledHeader>
        <StyledCompanyName href="/">Some Company</StyledCompanyName>

        <ContactUsButton></ContactUsButton>
      </StyledHeader>
    </Container>
  );
};

export default Header;
