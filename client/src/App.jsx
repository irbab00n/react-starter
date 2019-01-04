import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home.jsx';

import '../sass/main.scss';

export const hist = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // console.log(this.props);

    return (
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
};
