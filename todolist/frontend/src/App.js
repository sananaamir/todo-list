import React, { useState, useEffect, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCounter, fetchTodos, submitTodo } from './actions/boilerplate'

function App(props) {

  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    if (!didMount) {
      setIsLoading(true)
      props.fetchTodos((data) => {
        setTodos(data.todos)
        setIsLoading(false)
      })
      setDidMount(true)
    }
  }, [didMount])

  const onClickButton = () => {
    setIsLoading(true)

    props.submitTodo((data) => {
      setTodos(data.todos)
      setIsLoading(false)
    }, todoText)

  }

  const onChangeTodoText = (e) => {
    console.log(e.target.value)
    setTodoText(e.target.value)
  }

  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={8} style={{ textAlign: 'center' }}>
          <Paper elevation={3}>
            <h1>Todo List App</h1>
            <p>
              <strong>
                Hi there! This is a very basic full-stack todo list app. You can view the sourcecode here&nbsp;
                <a href="https://github.com/sananaamir/todo-list" target="_blank" rel="noopener noreferrer">React-Flask Boilerplate</a>&nbsp;
                and get started on your own Full-Stack journey!
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

      <Grid container justify="center" spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <form noValidate autoComplete="off" style={{ width: '100%' }}>
            <TextField label="Todo Item" variant="outlined" onChange={onChangeTodoText} style={{ width: '100%' }} />
          </form>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={onClickButton} style={{ height: '100%' }}>
            ADD
          </Button>
        </Grid>

        {isLoading && <Grid item xs={12} md={4} style={{ textAlign: 'center' }}><CircularProgress /></Grid>}

      </Grid>

      {!isLoading && todos.length > 0 && <Fragment>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            {todos.map((todo, index) => (
              <Fragment key={'todo-' + index}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {todo.todo_text}
                    </Typography>
                  </CardContent>
                </Card>
                <br></br>
              </Fragment>
            ))}
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Fragment>}
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
    incrementCounter,
    fetchTodos,
    submitTodo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
