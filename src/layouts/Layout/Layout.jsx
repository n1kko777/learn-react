import React, { Fragment, Component } from "react";

// Components
import Menu from "../../components/Menu";
import WelcomeModal from "../../components/WelcomeModal";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <Fragment>
        <Menu toggleModal={this.toggleModal} />
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
