import Header from "@/components/Header";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Video from "@/components/Video";
import { Box } from "@mui/system";
import theme from "../../theme";
import InfoTitle from "@/components/InfoTitle";
import { StyledButton } from "@/components/StyledButton";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container color="primary" as="header">
          <Header />
        </Container>
        <Container color="secondary" as="section">
          <Box
            component="div"
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "block",
                xs: "block",
              },
              padding: "26px 33px 88px 46px",
              gap: "120px",
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
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                maxWidth: "530px",
                aspectRatio: "16 / 9",
                overflow: "hidden",
              }}
            >
              <Video
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                width="100%"
                height="100%"
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
              display: {
                lg: "grid",
                md: "grid",
                sm: "grid",
              },
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "100px",
              padding: "0 64px 68px",
            }}
          >
            {Array.from({ length: 6 }, (_, index) => (
              <InfoTitle
                titlePadding="10px"
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
            <StyledButton href="/form">Contact Us</StyledButton>
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
            <StyledButton href="/form">Contact Us</StyledButton>
          </Box>
        </Container>
        <Container color="primary" as="section">
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}
