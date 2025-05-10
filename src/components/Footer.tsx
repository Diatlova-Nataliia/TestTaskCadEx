import { Box } from "@mui/system";
import React from "react";
import { Copyright } from "@/components/Copyright";

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
        <Copyright>Some Company 2024</Copyright>
      </Box>
    </>
  );
};

export default Footer;
