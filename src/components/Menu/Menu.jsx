import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { toggleNav } from "../../actions/toggle-nav";

import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    const { onToggleNav, openNav, menuItems, toggleModal } = this.props;

    const items = menuItems.map((item, i) => (
      <MenuItem
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
            <NavLink className="navbar-item" to="/">
              <img
                src="https://bulma.io/images/bulma-logo-white.png"
                width="112"
                height="28"
              />
            </NavLink>
            <a
              role="button"
              className={openNav ? "navbar-burger is-active" : "navbar-burger"}
              onClick={e => {
                onToggleNav(e, openNav);
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
                    <strong onClick={toggleModal}>Вход</strong>
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

export default connect(
  state => ({
    menuItems: state.menuItems,
    openNav: state.openNav
  }),
  dispatch => ({
    onToggleNav: (event, openNav) => {
      dispatch(toggleNav(event, openNav));
    }
  })
)(Menu);
