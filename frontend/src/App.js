import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={8} style={{ textAlign: 'center' }}>
          <Paper elevation={3}>
            <h1>React-Flask Boilerplate</h1>
            <p>
              <strong>
                Hi there! You can clone this ready-to-go&nbsp;
                <a href="https://github.com/sananaamir/react-flask-boilerplate" target="_blank">React-Flask Boilerplate</a>&nbsp;
                and get started on making your exciting ideas into a reality!
              </strong>
            </p>
            <p>
              <strong>Happy Hacking!</strong>
            </p>
            <p>
              <strong>
                - Sanan Aamir
              </strong>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
