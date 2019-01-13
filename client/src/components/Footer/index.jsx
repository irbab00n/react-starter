import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="footer-wrapper cosbytes-background">
        <div className="footer-inner-wrapper">
          2019 All Rights Reserved | Developed by Thomas Cosby
        </div>
      </div>
    );

  }
}