// components/About.tsx
import React from "react";
import { Box, Typography, Avatar, useTheme, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    textAlign: "left",
    gap: "2rem",
  },
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: 160,
  height: 160,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginBottom: 0,
  },
}));

export default function About() {
  const theme = useTheme();

  return (
    <Box id="about">
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ textDecoration: "underline" }}
      >
        About Me
      </Typography>

      <AboutContainer>
        <ProfileImage
          alt="Vishnu Profile"
          src="/profile.jpg" // Place a profile.jpg inside /public folder
        />
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: theme.palette.text.secondary }}
          >
            Hi, I'm Vishnu — a passionate React Developer with 3+ years of
            experience building scalable, responsive apps using React.js, React
            Native, and Next.js. I enjoy solving problems, collaborating with
            teams, and crafting clean, maintainable UI code.
            <br />
            <br />
            I’ve worked on both mobile and web projects, and I always strive to
            learn new technologies and build better user experiences. Outside of
            work, I love gaming, learning tech trends, and exploring creative
            design.
          </Typography>
          <Button
            variant="contained"
            // color="primary"
            sx={{ mt: 3, backgroundColor: "#222222", color: "#ffffff" }}
            href="/VISHNU-K-Resume.pdf"
            download
          >
            Download Resume
          </Button>
        </Box>
      </AboutContainer>
    </Box>
  );
}
