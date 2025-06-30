// components/Skills.tsx
import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

const skills = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "React Native", logo: "/logos/react-native.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
];

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const SkillItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const LogoImage = styled("img")({
  width: "48px",
  height: "48px",
  marginBottom: "0.5rem",
});

export default function Skills() {
  return (
    <Box id="skills" sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textDecoration: "underline" }}
      >
        Skills
      </Typography>
      <GridContainer>
        {skills.map((skill) => (
          <Tooltip title={skill.name} key={skill.name}>
            <SkillItem>
              <LogoImage src={skill.logo} alt={skill.name} />
              <Typography variant="body2">{skill.name}</Typography>
            </SkillItem>
          </Tooltip>
        ))}
      </GridContainer>
    </Box>
  );
}
