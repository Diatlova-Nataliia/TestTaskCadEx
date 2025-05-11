import { Button } from "@/components/Button";
import Link from "next/link";

export const ContactUsButton = () => {
  return (
    <Button component={Link} href="/contact-us" variant="contained">
      Contact us
    </Button>
  );
};
