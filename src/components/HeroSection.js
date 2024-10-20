import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
    color: "#fff",
    background:
      "linear-gradient(135deg, rgba(58, 123, 213, 1) 0%, rgba(0, 210, 255, 1) 100%)",
  },
  videoBackground: {
    display: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    textAlign: "center",
    animation: `$fadeIn 1s ${theme.transitions.easing.easeInOut}`,
  },
  title: {
    fontSize: "4rem",
    fontWeight: 700,
    animation: `$bounce 1s ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: 400,
    animation: `$pulse 1s ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 4),
    backgroundColor: "#1976d2",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes bounce": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.1)" },
    "100%": { transform: "scale(1)" },
  },
  "@keyframes pulse": {
    "0%": { opacity: 0.7 },
    "50%": { opacity: 1 },
    "100%": { opacity: 0.7 },
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
          },
        }}
        init={loadFull}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <Box className={classes.overlay} />
      <Box className={classes.content}>
        <Typography variant="h1" className={classes.title}>
          Champion the Cause: Your Actions Can Save Lives
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Join Us in Fostering a Safe Space for Every Mind and Every Story.
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          href="#get-involved"
        >
          Join the Movement
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
