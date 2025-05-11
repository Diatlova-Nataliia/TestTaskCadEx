import { Box } from "@mui/system";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/Button";
import React from "react";

export type FormField = {
  name: string;
  label: string;
  type: "text" | "textarea";
  placeholder: string;
};

export type FormFieldValue = string;
export type FormFieldData<T extends string> = Record<T, FormFieldValue>;

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formSchema: FormField[];
  data: FormFieldData<string>;
}

const Form: React.FC<FormProps> = ({ onSubmit, formSchema, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {formSchema.map((fieldProps, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "24px",
              fontSize: "20px",
            }}
          >
            <FormInput
              key={fieldProps.name}
              name={fieldProps.name}
              field={fieldProps}
              onChange={onChange}
              labelPadding="10px"
            />
          </Box>
        ))}
        <Button type="submit" sx={{ width: "100%" }}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
