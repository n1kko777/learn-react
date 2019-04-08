import React, { Fragment, Component } from "react";

// Components
import Menu from "../../components/Menu";
import WelcomeModal from "../../components/WelcomeModal";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        { name: "Главная", href: "/" },
        { name: "Пользователи", href: "/users" },
        { name: "Посты", href: "/posts" },
        { name: "Комментарии", href: "/comments" }
      ]
    };
  }

  render() {
    const { menuItems } = this.state;

    return (
      <Fragment>
        <Menu menuItems={menuItems} />
        <WelcomeModal />
        <div className="container">
          <div className="wrapper">{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
