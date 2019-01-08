import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home.jsx';
import Navbar from './components/Navbar';

import '../sass/main.scss';

/* Make application history available as an export */
export const hist = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // console.log(this.props);

    return (
      <div>
        <Navbar />
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
};
