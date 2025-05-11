import React from "react";
import { SeoHelper } from "@/helpers/seo-helper";
import ContactUsForm from "@/components/ContactUsForm";

export async function generateMetadata() {
  return SeoHelper({
    title: "Contact us",
    description: "You are adopted",
    url: "/contact-us",
    image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  });
}

export default function FormPage() {
  return <ContactUsForm></ContactUsForm>;
}
