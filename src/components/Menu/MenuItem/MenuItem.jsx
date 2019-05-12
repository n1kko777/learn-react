import React from "react";
import { NavLink } from "react-router-dom";

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

export default MenuItem;
