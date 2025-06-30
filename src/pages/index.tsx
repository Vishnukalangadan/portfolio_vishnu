// pages/index.tsx
import { Typography, Container, Box } from "@mui/material";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box id="home">
      <Container>
        <Typography variant="h3" gutterBottom sx={{ marginTop: "2rem" }}>
          Hi, I&#39;m Vishnu 👋
        </Typography>
        <Typography variant="h5">
          React Developer | Front-End Enthusiast
        </Typography>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </Box>
  );
}
