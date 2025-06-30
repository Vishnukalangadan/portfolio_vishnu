// components/Experience.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";

const Timeline = styled("div")(({ theme }) => ({
  position: "relative",
  margin: "2rem 0",
  paddingLeft: "2rem",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "20px",
    top: 0,
    bottom: 0,
    width: "4px",
    background: theme.palette.primary.main,
  },
}));

const Entry = styled("div")({
  position: "relative",
  marginBottom: "2rem",
  paddingLeft: "2.5rem",
});

const Dot = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "12px",
  top: 0,
  width: "16px",
  height: "16px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  border: "3px solid white",
}));

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  description,
}) => (
  <Entry>
    <Dot />
    <Typography variant="h6" fontWeight="bold">
      {title} @ {company}
    </Typography>
    <Typography variant="subtitle2" color="text.secondary">
      {duration}
    </Typography>
    <Typography variant="body1" mt={1}>
      {description}
    </Typography>
  </Entry>
);

export default function Experience() {
  return (
    <Box id="experience" sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        <WorkIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        Experience
      </Typography>
      <Timeline>
        <ExperienceItem
          title="React Developer"
          company="Tata Consultancy Services"
          duration="Jan 2022 – Present"
          description="Developed scalable React.js and React Native apps, integrated APIs, optimized performance, and collaborated with US teams."
        />
        {/* <ExperienceItem
          title="Frontend Developer Intern"
          company="XYZ Startup"
          duration="Jul 2021 – Dec 2021"
          description="Built responsive UI components with React and Material UI. Handled form validation and API integration."
        /> */}
      </Timeline>
    </Box>
  );
}
