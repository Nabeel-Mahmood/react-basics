import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from '../QDelft_logo.svg';
import '../styles/App.css';
import AddTodo from './todos/AddTodo';
import Todos from './todos/Todos';
import UpdateTodo from './todos/UpdateTodo';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="App container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>QDelft Basic React To Do</h1>
            </header>
            <div className="row">
              <div className="col-xs-12">
                <Switch>
                  <Route exact path="/todos" component={Todos} />
                  <Route exact path="/todos/new" component={AddTodo} />
                  <Route path="/todos/:id" component={UpdateTodo} />
                  <Redirect from="/" to="/todos" />
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
