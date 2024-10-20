import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroSection from '../components/HeroSection';
import GoalSection from '../components/GoalSection';
import EventSection from '../components/EventSection';

const theme = createTheme();

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeroSection />
      <GoalSection />
      <EventSection />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
