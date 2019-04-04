import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
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
            <button onClick={()=> {this.props.toggleModal()}} className="button is-success">Login</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
