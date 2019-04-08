import React, { Component } from "react";
import { Link } from "react-router";
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
        className="navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                src="https://bulma.io/images/bulma-logo-white.png"
                width="112"
                height="28"
              />
            </Link>
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
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Вход</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
