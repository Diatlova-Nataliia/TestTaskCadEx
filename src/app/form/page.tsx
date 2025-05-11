"use client";
import theme from "../../../theme";
import Header from "@/components/Header";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import React from "react";
import Footer from "@/components/Footer";
import AdditionalFooter from "@/components/AdditionalFooter";
import Form, { FormFieldData, FormField } from "@/components/Form";
import Container from "@/components/Container";

const CONTACT_US_SCHEMA = [
  { name: "name", label: "Name", type: "text", placeholder: "Value" },
  { name: "email", label: "Email", type: "text", placeholder: "Value" },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Value",
  },
] as const satisfies FormField[];

type ContactUsSchema = typeof CONTACT_US_SCHEMA;
type ContactUsFieldName = ContactUsSchema[number]["name"];

export default function FormPage() {
  const [formData, setFormData] = React.useState<
    FormFieldData<ContactUsFieldName>
  >({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submittedData = new FormData(e.currentTarget);
    let response: Response;

    try {
      response = await fetch("/api/submit", {
        method: "POST",
        body: submittedData,
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      return;
    }

    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <Container color="secondary" as="section">
      <Box
        component="div"
        sx={{
          margin: "0 auto",
          maxWidth: {
            lg: "1200px",
          },
        }}
      >
        {message ? (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",

              padding: "160px 0",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: "bold",
                fontSize: {
                  lg: "4.5rem",
                  xs: "3rem",
                },
                wordBreak: "break-word",
                width: "100%",
                maxWidth: "580px",
                textAlign: "center",
              }}
            >
              {message}
            </Typography>
          </Box>
        ) : (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#F5F5F5",

              padding: "clamp(12px, 8vw, 160px)",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "3rem",
                paddingBottom: "34px",
                textAlign: "center",
              }}
            >
              Only CTA on the page
            </Typography>
            <Box
              component="div"
              sx={{
                padding: "24px",
                border: "1px solid #D9D9D9",
                borderRadius: "8px",
              }}
            >
              <Form
                onSubmit={handleSubmit}
                onChange={handleChange}
                formSchema={CONTACT_US_SCHEMA}
                data={formData}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}
