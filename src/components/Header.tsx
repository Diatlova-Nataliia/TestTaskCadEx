"use client";
import React from "react";
import { styled } from "../../stitches.config";
import { StyledButton } from "@/components/StyledButton";
import { Copyright } from "@/components/Copyright";

interface HeaderProps {
  href?: string;
}

const StyledHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  margin: "0",
});

const Header = ({ href, children }: React.PropsWithChildren<HeaderProps>) => {
  return (
    <StyledHeader>
      <Copyright>{children}</Copyright>
      <StyledButton component="a" href={href} variant="contained">
        Contact us
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
