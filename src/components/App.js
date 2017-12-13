import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from '../QDelft_logo.svg';
import '../styles/App.css';
import Todos from './todos/Todos';
import AddTodo from './todos/AddTodo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
                  <Route path="/todos/new" component={AddTodo} />
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
