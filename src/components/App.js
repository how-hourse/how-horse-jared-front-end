import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import SignIn from '../containers/SignIn';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
      </Switch>
    </Router>
  );
}
