import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from 'react-router-dom';

import Blog from './views/Blog.jsx';
import Home from './views/Home.jsx';
import Projects from './views/Projects.jsx';

import Navbar from './components/Navbar';

import '../sass/main.scss';

/* Make application history available as an export */
export const hist = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="application-wrapper">
        <Navbar />
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>            
            <Route path="/projects" component={Projects}/>
          </Switch>
        </Router>
      </div>
    );
  }
};
