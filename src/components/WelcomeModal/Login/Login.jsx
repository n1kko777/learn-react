import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { toggleModal } from "../../../actions/toggle-modal";

class Login extends Component {
  render() {
    const { onToggleModal, modal } = this.props;

    return (
      <div className="box login-form">
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              placeholder="Text input"
              defaultValue="bulma"
            />

            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>
        <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>
        <div className="field">
          <p className="control">
            <button
              onClick={() => onToggleModal(modal)}
              className="button is-success"
            >
              Login
            </button>
          </p>
        </div>
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
)(Login);
