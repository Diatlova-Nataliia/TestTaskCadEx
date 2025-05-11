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
  border: 1px solid #d9d9d9;
  font-size: 20px;
  border-radius: 6px;
  font-family: inherit;
  max-width: 270px;
  height: ${({ fieldType = "text" }) => INPUT_HEIGHTS[fieldType]};
`;
