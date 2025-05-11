import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

interface ArticleProps {
  title: string;
  text: string;
  fontWeight?: string;
  titleFontSize?: string;
  textFontSize?: string;
  textColor?: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  text,
  fontWeight,
  titleFontSize,
  textFontSize,
  textColor,
}) => {
  return (
    <>
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={fontWeight}
          fontSize={titleFontSize}
          marginBottom={1}
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

export default Article;
