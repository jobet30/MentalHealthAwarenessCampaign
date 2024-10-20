import React, { useEffect, useState} from 'react';
import { fetchMarkdown } from '../utils/fetchMarkdown';
import { CircularProgress, Typography, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(4, 0),
        background: theme.palette.background.paper,
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
        backgroundColor: theme.palette.background.default,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.02)',
        },
    },
}));

const GoalsSection = () => {
    const classes = useStyles();
    const [goalsHTML, setGoalsHTML] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGoals = async () => {
            const fetchedHTML = await fetchMarkdown('../content/goals.md');
            if (fetchedHTML) {
                setGoalsHTML(fetchedHTML);
            } else {
                setError('Failed to load goals. Please try again later.');
            }
            setLoading(false);
        };
        getGoals();
    }, []);

    return (
        <section className={classes.section}>
            <Typography variant="h2" className={classes.title}>
                Our Goals
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
                    <div dangerouslySetInnerHTML={{ __html: goalsHTML }} />
                </Paper>
            )}
        </section>
    );
};

export default GoalsSection;