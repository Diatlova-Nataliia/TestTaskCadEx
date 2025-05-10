import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

interface InfoTitle {
  title: string;
  text: string;
  fontWeight?: string;
  titleFontSize?: string;
  textFontSize?: string;
  textColor?: string;
  titlePadding?: string;
  boxPadding?: string;
}

const InfoTitle: React.FC<InfoTitle> = ({
  title,
  text,
  fontWeight,
  titleFontSize,
  textFontSize,
  textColor,
  titlePadding,
  boxPadding,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={fontWeight}
          fontSize={titleFontSize}
          padding={titlePadding}
        >
          {title}
        </Typography>
        <Typography variant="body2" fontSize={textFontSize} color={textColor}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default InfoTitle;
