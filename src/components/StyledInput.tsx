import styled from "styled-components";
import { FormField } from "@/components/Form";

const INPUT_HEIGHTS = {
  text: "40px",
  textarea: "80px",
} as const satisfies Record<FormField["type"], string>;

export interface StyledInputProps {
  fieldType?: FormField["type"];
}

export const StyledInput = styled.textarea<StyledInputProps>`
  padding: 11px 0 11px 16px;
  border: 3px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(45deg, #d9d9d9, #d9d9d9);
  background-size:
    200% 100%,
    200% 100%;
  background-position:
    0 0,
    0 0;
  font-size: 20px;
  border-radius: 6px;
  font-family: inherit;
  height: ${({ fieldType = "text" }) => INPUT_HEIGHTS[fieldType]};

  &:focus,
  &:focus-visible,
  &:focus-within,
  &:active {
    outline: none;
    border-color: transparent;
    animation: shine 4s linear infinite;
    background-image: linear-gradient(white, white),
      linear-gradient(60deg, #ff0066, #ffcc00, #33ccff, #ff0066);
  }

  @keyframes shine {
    to {
      background-position:
        0 0,
        200% 0;
    }
  }
`;
