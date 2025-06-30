// components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "1rem",
  backgroundColor: theme.palette.mode === "light" ? "#f1f1f1" : "#111",
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
}));

export default function Footer() {
  return (
    <FooterWrapper>
      <Typography variant="body2">
        © {new Date().getFullYear()} Vishnu Kalangadan — All Rights Reserved.
      </Typography>
    </FooterWrapper>
  );
}
