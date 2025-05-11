import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@/components/CardProps";
import Container from "@/components/Container";
import { ContactUsButton } from "@/components/ContactUsButton";
import Video from "@/components/Video";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Most important title on the page"
        description="Lorem ipsum dolor sit amet"
        url="/"
        image="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
      ></SEO>
      <Container color="secondary" as="section">
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            padding: {
              lg: "24px 32px 80px",
              md: "18px 24px 60px",
              xs: "10px 12px 24px",
            },
            gap: {
              lg: "120px",
              md: "80px",
              xs: "40px",
            },
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              flex: 1,
              paddingBottom: {
                sm: "15px",
                xs: "10px",
              },
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              fontSize="3rem"
              paddingBottom="24px"
            >
              Most important title on the page
            </Typography>
            <Typography variant="body1" maxWidth="420px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "flex-end",
              width: "100%",
              maxWidth: "530px",
              aspectRatio: "16 / 9",
              overflow: "hidden",
            }}
          >
            <Video
              id="dQw4w9WgXcQ"
              title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            ></Video>
          </Box>
        </Box>
      </Container>
      <Container color="primary" as="section">
        <Typography
          variant="h2"
          sx={{
            padding: "clamp(12px, 4vw, 100px)",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Also very important title
        </Typography>
        <Box
          component="section"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "1fr 1fr 1fr",
              sm: "1fr 1fr",
              xs: "1fr",
            },
            gap: {
              lg: "100px",
              sm: "80px",
              xs: "32px",
            },
            padding: {
              lg: "0 64px 72px",
              md: "0 48px 56px",
              xs: "0 24px 30px",
            },
          }}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <Card
              textColor="#757575"
              titleFontSize="1.5rem"
              textFontSize="1rem"
              fontWeight="bold"
              key={index}
              title="Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
            />
          ))}
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "43px",
          }}
        >
          <ContactUsButton></ContactUsButton>
        </Box>
      </Container>
      <Container color="secondary" as="section">
        <Box
          component="footer"
          sx={{
            display: "flex",
            backgroundColor: "#F5F5F5",
            flexDirection: "column",
            alignItems: "center",
            padding: "77px 0 67px 0",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize="3rem"
            paddingBottom="40px"
          >
            Less important title
          </Typography>
          <ContactUsButton></ContactUsButton>
        </Box>
      </Container>
    </>
  );
}
