import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNav: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(e) {
    e.preventDefault();
    this.setState(state => {
      return { openNav: !state.openNav };
    });
  }

  render() {
    const { openNav } = this.state;
    const { menuItems } = this.props;

    const items = menuItems.map((item, i) => (
      <MenuItem
        onClick={e => {
          this.toggleNav(e);
        }}
        key={i}
        href={item.href}
      >
        {item.name}
      </MenuItem>
    ));
    return (
      <nav
        className="navbar is-fixed-top is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className={openNav ? "navbar-burger is-active" : "navbar-burger"}
              onClick={e => {
                this.toggleNav(e);
              }}
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={openNav ? "navbar-menu is-active" : "navbar-menu"}>
            <div className="navbar-start">{items}</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
