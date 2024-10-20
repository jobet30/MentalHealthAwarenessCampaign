import React, { useEffect, useState } from 'react';
import { fetchMarkdown } from '../utils/fetchMarkdown';
import { CircularProgress, Typography, Box, Button, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(4, 0),
        background: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6, 0),
        },
    },
    title: {
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.main,
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
    },
    loadingBox: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(4, 0),
    },
    errorMessage: {
        color: theme.palette.error.main,
        textAlign: 'center',
        fontSize: '1.2rem',
    },
    paper: {
        padding: theme.spacing(4),
        margin: theme.spacing(0, 'auto'),
        maxWidth: '800px',
        boxShadow: theme.shadows[5],
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.02)',
        },
    },
    registerButton: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 4),
        fontSize: '1.2rem',
    },
}));

const EventsSection = () => {
    const classes = useStyles();
    const [eventsHTML, setEventsHTML] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getEvents = async () => {
            const fetchedHTML = await fetchMarkdown('../content/events.md');
            if (fetchedHTML) {
                setEventsHTML(fetchedHTML);
            } else {
                setError('Failed to load events. Please try again later.');
            }
            setLoading(false);
        };
        getEvents();
    }, []);

    return (
        <section className={classes.section}>
            <Typography variant="h2" className={classes.title}>
                Upcoming Events
            </Typography>
            {loading ? (
                <Box className={classes.loadingBox}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Typography className={classes.errorMessage}>
                    {error}
                </Typography>
            ) : (
                <Paper className={classes.paper}>
                    <div dangerouslySetInnerHTML={{ __html: eventsHTML }} />
                    <Box textAlign="center" mt={4}>
                        <Button variant="contained" color="primary" className={classes.registerButton} href="#register">
                            Register for an Event
                        </Button>
                    </Box>
                </Paper>
            )}
        </section>
    );
};

export default EventsSection;
