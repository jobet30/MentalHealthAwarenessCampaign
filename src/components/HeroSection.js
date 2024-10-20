import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const useStyles = makeStyles((theme) => ({
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
        color: '#fff',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../images/hero.jpg) center/cover no-repeat',
    },
    videoBackground: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.5)',
        zIndex: 0,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    content: {
        zIndex: 2,
        textAlign: 'center',
        animation: `$fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    },
    title: {
        fontSize: '4rem',
        fontWeight: 700,
        animation: `$bounce 1s ${theme.transitions.easing.easeInOut}`,
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
    },
    subtitle: {
        fontSize: '2rem',
        fontWeight: 400,
        animation: `$pulse 1s ${theme.transitions.easing.easeInOut}`,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
        },
    },
    button: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 4),
        backgroundColor: '#1976d2',
        '&:hover': {
            backgroundColor: '#115293',
        },
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    '@keyframes bounce': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.1)' },
        '100%': { transform: 'scale(1)' },
    },
    '@keyframes pulse': {
        '0%': { opacity: 0.7 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0.7 },
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.heroContainer}>
            <Particles
                id="tsparticles"
                url="./particles/particles-config.json"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
                init={loadFull}
            />
            <video
                className={classes.videoBackground}
                autoPlay
                loop
                muted
                src="./videos/hero-vid.mp4"
            />
            <Box className={classes.overlay} />
            <Box className={classes.content}>
                <Typography variant="h1" className={classes.title}>
                    Join the Fight for Mental Health Awareness
                </Typography>
                <Typography variant="h5" className={classes.subtitle}>
                    Together, we can create a supportive environment for everyone.
                </Typography>
                <Button variant="contained" className={classes.button} href="#get-involved">
                    Get Involved
                </Button>
            </Box>
        </Box>
    );
};

export default HeroSection;
