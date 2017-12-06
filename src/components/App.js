import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from '../QDelft_logo.svg';
import '../styles/App.css';
import Todos from './todos/Todos';

class App extends Component {
  render() {
    return (
      <main>
        <div className="App container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>QDelft Basic React To Do</h1>
          </header>
          <div className="row">
            <div className="col-xs-12">
              <Todos />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
