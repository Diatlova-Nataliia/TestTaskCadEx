"use client";
import React from "react";
import { Box } from "@mui/system";
import { StyledInput } from "@/components/StyledInput";
import { FormField } from "@/components/Form";

interface FormInputProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  field: FormField;
  labelPadding?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  onChange,
  field,
  labelPadding,
}) => {
  const isTextarea = field.type === "textarea";

  return (
    <>
      <Box component="div" paddingBottom={labelPadding}>
        <label htmlFor={name}>{field.label}</label>
      </Box>
      <StyledInput
        as={isTextarea ? "textarea" : "input"}
        inputType={isTextarea ? "textarea" : "input"}
        placeholder={field.placeholder}
        name={name}
        id={name}
        type={!isTextarea ? field.type : undefined}
        onChange={onChange}
        required
      />
    </>
  );
};

export default FormInput;
