import React from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(6, 0),
    background: theme.palette.background.default,
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.primary.light,
      opacity: 0.1,
      zIndex: 0,
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: 700,
    textTransform: "uppercase",
    zIndex: 1,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
  },
  loadingBox: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4, 0),
    zIndex: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(0, "auto"),
    maxWidth: "800px",
    boxShadow: theme.shadows[10],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: "transform 0.3s ease-in-out",
    zIndex: 1,
    position: "relative",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows[15],
    },
  },
  eventCard: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.shadows[5],
    },
  },
  eventTitle: {
    fontSize: "1.5rem",
    color: theme.palette.primary.main,
  },
  eventDate: {
    fontSize: "1rem",
    color: theme.palette.text.secondary,
  },
  eventDescription: {
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  },
  registerButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1, 4),
    fontSize: "1.2rem",
  },
}));

const EventSection = () => {
  const classes = useStyles();

  const events = [
    {
      id: 1,
      title: "Mental Health Awareness Workshop",
      date: "2024-11-15",
      description:
        "Join us for an interactive workshop where we discuss mental health strategies and coping mechanisms.",
    },
    {
      id: 2,
      title: "Support Group Meeting",
      date: "2024-12-05",
      description:
        "A safe space for individuals to share their experiences and support each other.",
    },
    {
      id: 3,
      title: "Annual Fundraising Gala",
      date: "2024-12-20",
      description:
        "Help us raise funds to support mental health initiatives in our community. Join us for a night of fun and awareness.",
    },
  ];

  return (
    <section className={classes.section}>
      <Typography variant="h2" className={classes.title}>
        Upcoming Events
      </Typography>
      <Paper className={classes.paper}>
        {events.length === 0 ? (
          <Box className={classes.loadingBox}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            {events.map((event) => (
              <Box key={event.id} className={classes.eventCard}>
                <Typography variant="h4" className={classes.eventTitle}>
                  {event.title}
                </Typography>
                <Typography variant="body1" className={classes.eventDate}>
                  {event.date}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.eventDescription}
                >
                  {event.description}
                </Typography>
              </Box>
            ))}
            <Box textAlign="center" mt={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.registerButton}
                href="#register"
              >
                Register for an Event
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </section>
  );
};

export default EventSection;
