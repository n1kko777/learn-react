import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { toggleModal } from "../../actions/toggle-modal";

import Login from "./Login";

class WelcomeModal extends Component {
  render() {
    const { onToggleModal, modal } = this.props;

    return (
      <div className={modal ? "modal is-active" : "modal"}>
        <div
          onClick={() => onToggleModal(modal)}
          className="modal-background"
        />
        <div className="modal-content">
          <Login />
        </div>
        <button
          onClick={() => onToggleModal(modal)}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    modal: state.modal
  }),
  dispatch => ({
    onToggleModal: modal => {
      dispatch(toggleModal(modal));
    }
  })
)(WelcomeModal);
