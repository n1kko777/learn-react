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
      ],
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const { menuItems } = this.state;
    
    return (
      <Fragment>
        <Menu menuItems={menuItems} toggleModal={this.toggleModal} />
        {this.state.modal ? (
          <WelcomeModal
            modal={this.state.modal}
            toggleModal={this.toggleModal}
          />
        ) : null}
        <div className="container">
          <div className="wrapper">{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
