import React, { Component } from "react";

import Login from "./Login";

class WelcomeModal extends Component {
  render() {
    return (
      <div className={this.props.modal ? "modal is-active" : "modal"}>
        <div onClick={this.props.toggleModal} className="modal-background" />
        <div className="modal-content">
          <Login toggleModal={this.props.toggleModal} />
        </div>
        <button
          onClick={this.props.toggleModal}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    );
  }
}

export default WelcomeModal;
