import React from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
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
    fontSize: "3.5rem",
    fontWeight: 700,
    textTransform: "uppercase",
    zIndex: 1,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  loadingBox: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4, 0),
    zIndex: 1,
  },
  paper: {
    padding: theme.spacing(6),
    margin: theme.spacing(0, "auto"),
    maxWidth: "900px",
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
  list: {
    paddingLeft: theme.spacing(2),
  },
  listItem: {
    padding: theme.spacing(2, 0),
    display: "flex",
    alignItems: "center",
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  },
  listItemText: {
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    fontWeight: 500,
    transition: "color 0.3s ease",
    marginLeft: theme.spacing(2),
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

const GoalSection = () => {
  const classes = useStyles();

  const goals = [
    "Raise awareness about mental health issues in our community.",
    "Provide resources and support for individuals struggling with mental health challenges.",
    "Foster a culture of open dialogue and acceptance around mental health.",
    "Collaborate with local organizations to improve mental health services.",
    "Encourage preventative measures to promote mental wellness.",
  ];

  return (
    <section className={classes.section}>
      <Typography variant="h2" className={classes.title}>
        Our Goals
      </Typography>
      {goals.length === 0 ? (
        <Box className={classes.loadingBox}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper className={classes.paper}>
          <List className={classes.list}>
            {goals.map((goal, index) => (
              <ListItem key={index} className={classes.listItem}>
                <CheckCircleIcon className={classes.icon} />
                <ListItemText primary={goal} className={classes.listItemText} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </section>
  );
};

export default GoalSection;
