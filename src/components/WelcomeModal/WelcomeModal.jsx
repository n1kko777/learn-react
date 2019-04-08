import React, { Component } from "react";

import Login from "./Login";

class WelcomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className={this.state.modal ? "modal is-active" : "modal"}>
        <div onClick={this.toggleModal} className="modal-background" />
        <div className="modal-content">
          <Login toggleModal={this.toggleModal} />
        </div>
        <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close" />
      </div>
    );
  }
}

export default WelcomeModal;
