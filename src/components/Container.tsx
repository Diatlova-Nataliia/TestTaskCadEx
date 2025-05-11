"use client";
import React from "react";
import { Box } from "@mui/system";

type ContainerProps = {
  as: "section" | "footer" | "div" | "header";
  color: "primary" | "secondary";
};

const Container = ({
  children,
  color = "primary",
  as,
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <Box
      component={as}
      sx={{
        backgroundColor: (theme) =>
          theme.palette[color]?.main ?? theme.palette.primary.main,
        borderBottom: "1px solid #D9D9D9",
      }}
    >
      <Box
        component="div"
        sx={{
          margin: "0 auto",
          maxWidth: {
            lg: "1200px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;
