import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import { GitHub, LinkedIn, Email, Code, Storage } from "@mui/icons-material";

export default function Portfolio() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shubham Tiwari
          </Typography>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#skills">
            Skills
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", mt: 8, mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm <span style={{ color: "#fbc02d" }}>Shubham Tiwari</span>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Full Stack Developer | React | Node.js | MongoDB
        </Typography>
        <Button
          variant="contained"
          color="warning"
          href="#projects"
          sx={{ mt: 3 }}
        >
          View My Work
        </Button>
      </Container>

      {/* About Section */}
      <Container id="about" sx={{ mt: 8, mb: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography maxWidth="600px" mx="auto">
          I am a passionate Full Stack Developer with expertise in building
          modern web applications using React, Node.js, and MongoDB. I love
          creating clean and user-friendly designs with high performance.
        </Typography>
      </Container>

      {/* Projects Section */}
      <Container id="projects" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Projects
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Project 1 */}
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Typography variant="h6">SportsPro Platform</Typography>
              <Typography sx={{ mt: 1 }}>
                SpotsPro is an advanced online cricket betting platform that
                allows users to place bets on live matches with real-time odds
                and dynamic win/loss calculations. The platform provides a
                smooth, responsive, and interactive interface for cricket
                enthusiasts to engage in betting responsibly.
              </Typography>
              <Box mt={2}>
                <Button href="#" startIcon={<GitHub />}>
                  GitHub
                </Button>
                <Button href="#" startIcon={<Code />}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Typography variant="h6">Portfolio Website</Typography>
              <Typography sx={{ mt: 1 }}>
                A personal portfolio website built with React and Material UI,
                designed to showcase my projects, skills, and experience in a
                clean and responsive interface. It includes sections for
                projects, work experience, and contact information, allowing
                visitors to explore my work and get in touch easily.
              </Typography>
              <Box mt={2}>
                <Button href="#" startIcon={<GitHub />}>
                  GitHub
                </Button>
                <Button href="#" startIcon={<Code />}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Typography variant="h6">ProfitNest</Typography>
              <Typography sx={{ mt: 1 }}>
                ProfitNest is a smart financial tracking and investment
                management web application. It helps users to manage their
                income, expenses, and savings in a simple and user-friendly way.
                The platform provides real-time insights, profit/loss analysis,
                and smart recommendations for better financial decisions.
              </Typography>
              <Box mt={2}>
                <Button href="#" startIcon={<GitHub />}>
                  GitHub
                </Button>
                <Button href="#" startIcon={<Code />}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      {/* Skills Section */}
      <Container id="skills" sx={{ mt: 8, mb: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Box display="flex" justifyContent="center" gap={4} mt={2}>
          <IconButton color="warning">
            <Code fontSize="large" titleAccess="React" />
          </IconButton>
          <IconButton color="success">
            <Storage fontSize="large" titleAccess="MongoDB" />
          </IconButton>
        </Box>
      </Container>

      {/* Contact Section */}
      <Container id="contact" sx={{ mt: 8, mb: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box display="flex" justifyContent="center" gap={4} mt={2}>
          <IconButton href="shubhamtiwari24092001@gmail.com">
            <Email fontSize="large" />
          </IconButton>
          <IconButton href="https://github.com/sttiwari24" target="_blank">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/shubham-tiwari-12895a218"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{ bgcolor: "grey.900", color: "white", textAlign: "center", p: 2 }}
      >
        © {new Date().getFullYear()} Shubham Tiwari. All rights reserved.
      </Box>
    </div>
  );
}
