import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <header className="navbar-wrapper cosbytes-background">
        <div className="navbar-inner-wrapper">
          <div className="logo">COSBYTES</div>
          <div className="links">Links</div>
        </div>
      </header>

    );

  }
}

export default Navbar;