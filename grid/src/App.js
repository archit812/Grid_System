import React from "react";
import { Grid } from '@mui/material';

function App() {

  return (
    <>
      {/* Basic Grid */}
      <Grid container style={{ backgroundColor: 'cyan' }} spacing={2}>
        <Grid lg={12} xs={6} style={{ backgroundColor: 'red' }}><h1 style={{ backgroundColor: 'yellow' }}>Hi this is me</h1></Grid>
        <Grid lg={6} xs={6} style={{ backgroundColor: 'orange' }}><h1 style={{ backgroundColor: 'yellow' }}>Hi this is me</h1></Grid>
        <Grid lg={6} xs={6} style={{ backgroundColor: 'green' }}><h1 style={{ backgroundColor: 'yellow' }}>Hi this is me</h1></Grid>
        <Grid lg={6} xs={6} style={{ backgroundColor: 'greenyellow' }}><h1 style={{ backgroundColor: 'yellow' }}>Hi this is me</h1></Grid>
        <Grid lg={6} xs={6} style={{ backgroundColor: 'greenyellow' }}><h1 style={{ backgroundColor: 'yellow' }}>Hi this is me</h1></Grid>
        <Grid lg={6} xs={6} style={{ backgroundColor: 'pink' }}><h1 style={{ backgroundColor: 'yellow' }}>Hi this is me</h1></Grid>

      </Grid>

    </>
  );
};

export default App;


/*
xs 
sm 
md 
lg
*/