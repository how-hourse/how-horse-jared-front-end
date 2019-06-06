import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SignIn from '../containers/SignIn';
import GameView from '../containers/GameView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/:name' component={GameView} />
      </Switch>
    </Router>
  );
}
