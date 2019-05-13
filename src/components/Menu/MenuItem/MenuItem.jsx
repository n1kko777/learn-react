import React from "react";
import { Link } from "react-router";

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
      <Link
        className={
          "navbar-item" +
          (window.location.pathname === href ? " is-active" : "")
        }
        to={href}
      >
        {children}
      </Link>
    );
  }
}

MenuItem.defaultProps = {
  children: "Главная",
  href: "/"
};

export default MenuItem;
