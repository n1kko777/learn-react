import React from "react";

class MenuItem extends React.Component {
  render() {
    const { href, children } = this.props;
    return (
      <a className="navbar-item" href={href}>
        {children}
      </a>
    );
  }
}

MenuItem.defaultProps = {
  children: "Home",
  href: "/"
};

export default MenuItem;
