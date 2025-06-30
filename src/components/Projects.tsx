// components/Projects.tsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const projects = [
  {
    title: "SHOWTIME (Movie App)",
    image: "/projects/showtime.jpg", // place an image in /public/projects/
    description:
      "An Android app for movie lovers built with React Native and TMDB API, featuring playable YouTube trailers.",
    tech: ["React Native", "TMDB API", "Axios"],
    github: "https://github.com/Vishnukalangadan/SHOWTIME",
    demo: "https://tinyurl.com/ShowTimeV2",
  },
  {
    title: "Netflix Clone",
    image: "/projects/netflix.jpg",
    description:
      "A responsive Netflix clone built using React.js, Axios, and TMDB API for movie listings.",
    tech: ["React", "Axios", "TMDB API"],
    github: "https://github.com/Vishnukalangadan/React_Netflix_Clone_Project",
  },
  {
    title: "OLX Clone",
    image: "/projects/olx.jpg",
    description:
      "A clone of OLX web app using React and Firebase with basic product listing functionality.",
    tech: ["React", "Firebase"],
    github: "https://github.com/Vishnukalangadan/React_OLX_Clone",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(1.5),
  boxShadow: theme.shadows[4],
}));

const Tags = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap",
}));

export default function Projects() {
  return (
    <Box id="projects" sx={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ textDecoration: "underline" }}
      >
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
        }}
      >
        {projects.map((project, idx) => (
          <StyledCard key={idx}>
            <CardMedia
              component="img"
              height="180"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>

              <Tags>
                {project.tech.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" color="primary" />
                ))}
              </Tags>

              <Box mt={2} display="flex" gap={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  href={project.github}
                  target="_blank"
                  size="small"
                >
                  GitHub
                </Button>
                {project.demo && (
                  <Button
                    variant="contained"
                    color="secondary"
                    href={project.demo}
                    target="_blank"
                    size="small"
                  >
                    Demo
                  </Button>
                )}
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
}
