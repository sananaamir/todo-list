import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCounter } from './actions/boilerplate'

function App(props) {

  const onClickButton = () => {
    props.incrementCounter()
  }

  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={8} style={{ textAlign: 'center' }}>
          <Paper elevation={3}>
            <h1>React-Flask Boilerplate</h1>
            <p>
              <strong>
                Hi there! You can clone this ready-to-go&nbsp;
                <a href="https://github.com/sananaamir/react-flask-boilerplate" target="_blank" rel="noopener noreferrer">React-Flask Boilerplate</a>&nbsp;
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
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={onClickButton}>Click Me To Increment Redux Counter</Button>
          <h1>{props.counter}</h1>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.boilerPlate.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementCounter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
