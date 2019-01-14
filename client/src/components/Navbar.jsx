import React from 'react';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <header className="navbar-wrapper cosbytes-background">
        <div className="navbar-inner-wrapper">
          <div className="logo"><a href="/">COSBYTES</a></div>
          <ul className="links">
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </header>

    );

  }
}

export default Navbar;