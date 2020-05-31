import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Route } from "react-router-dom";
import TodoContainer from './todo-container'

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={TodoContainer} />
      </div>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
