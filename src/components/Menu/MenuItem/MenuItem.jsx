import React from "react";
import { NavLink } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { toggleNav } from "../../../actions/toggle-nav";

class MenuItem extends React.Component {
  render() {
    const { href, children } = this.props;

    return (
      <NavLink
        className={
          "navbar-item"
        }
        activeClassName={ href === "/" ? "" : "is-active" }
        to={href}
      >
        {children}
      </NavLink>
    );
  }
}

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
