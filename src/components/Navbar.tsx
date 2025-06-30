// components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const sections = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id.toLowerCase());
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#000000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Vishnu
          </Typography>
          <Box>
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                onClick={() => scrollTo(section)}
                sx={{ textTransform: "none" }}
              >
                {section}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}
