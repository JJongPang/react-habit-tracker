import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
