import { StyledButton } from "@/components/StyledButton";
import Link from "next/link";

export const ContactUsButton = () => {
  return (
    <StyledButton component={Link} href="/form" variant="contained">
      Contact us
    </StyledButton>
  );
};
