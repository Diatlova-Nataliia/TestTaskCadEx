"use client";
import React from "react";
import { Box } from "@mui/system";
import { Input } from "@/components/Input";
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
  return (
    <>
      <Box component="div" paddingBottom={labelPadding}>
        <label htmlFor={name}>{field.label}</label>
      </Box>
      <Input
        as={field.type === "textarea" ? "textarea" : "input"}
        fieldType={field.type}
        placeholder={field.placeholder}
        name={name}
        id={name}
        type={field.type === "text" ? "text" : undefined}
        onChange={onChange}
        required
      />
    </>
  );
};

export default FormInput;
