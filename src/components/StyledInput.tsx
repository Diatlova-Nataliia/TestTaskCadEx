import { styled } from "../../stitches.config";

export const StyledInput = styled("textarea", {
  padding: "11px 0 11px 16px",
  border: "1px solid #D9D9D9",
  fontSize: "20px",
  borderRadius: 6,
  fontFamily: "inherit",
  maxWidth: "270px",
  variants: {
    inputType: {
      input: {
        height: "40px",
      },
      textarea: {
        height: "80px",
      },
    },
  },
});
