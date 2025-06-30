// components/Contact.tsx
import React from "react";
import { Box, Typography, IconButton, Tooltip, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const SocialContainer = styled(Box)(({ theme }) => ({
  padding: "2rem",
  textAlign: "center",
  backgroundColor: theme.palette.mode === "light" ? "#f9f9f9" : "#1a1a1a",
}));

const IconRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "1rem",
});

export default function Contact() {
  return (
    <SocialContainer id="contact">
      <Typography variant="h4" gutterBottom>
        📬 Get in Touch
      </Typography>
      <Typography variant="body1">
        Feel free to connect with me on LinkedIn or reach out via email.
      </Typography>

      <IconRow>
        <Tooltip title="GitHub">
          <IconButton
            component={Link}
            href="https://github.com/Vishnukalangadan"
            target="_blank"
            color="primary"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            component={Link}
            href="https://linkedin.com/in/vishnu-kalangadan"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email">
          <IconButton
            component={Link}
            href="mailto:vishnukalangadan0@gmail.com"
            color="primary"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Call">
          <IconButton component={Link} href="tel:917907264022" color="primary">
            <PhoneIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </IconRow>
    </SocialContainer>
  );
}
