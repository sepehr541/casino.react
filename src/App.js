import React, { Component } from 'react';
import Home from './components/Home'
import Table from './components/game/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Container fluid>
        <div className="App">
          <Router>
            <Switch>
              <Route exact to="/" component={Home} />
              <Route to='/table' component={Table}/>
            </Switch>
          </Router>
        </div>
      </Container>
    );
  }
}

export default App;
