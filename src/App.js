import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/auth' component={Auth} exact />
      </Switch>
    </Router>
  );
};

export default App;
