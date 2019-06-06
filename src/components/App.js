import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SignIn from '../containers/SignIn';
import FinishView from '../containers/FinishView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/:player/:score' component={FinishView} />
      </Switch>
    </Router>
  );
}
