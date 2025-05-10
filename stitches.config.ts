import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: "times-new-roman",
    letterSpacing: "-0.02em",
    backgroundColor: "#fff",
    color: "#000",
    margin: "0 auto",
  },
});
