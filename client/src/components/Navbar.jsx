import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <header className="navbar-wrapper">
        <div className="navbar-inner-wrapper">
          <div className="logo">Logo</div>
          <div className="links">Links</div>
          <span />
        </div>
      </header>

    );

  }
}

export default Navbar;