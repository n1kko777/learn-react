import React from "react";
import { NavLink } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { toggleNav } from "../../../actions/toggle-nav";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    const { href, children } = this.props;

    return (
      <NavLink
        className={
          "navbar-item" +
          (window.location.pathname === href ? " is-active" : "")
        }
        to={href}
      >
        {children}
      </NavLink>
    );
  }
}

MenuItem.defaultProps = {
  children: "Главная",
  href: "/"
};

export default connect(
  state => ({
    openNav: state.openNav
  }),
  dispatch => ({
    onToggleNav: (event, openNav) => {
      dispatch(toggleNav(event, openNav));
    }
  })
)(MenuItem);
