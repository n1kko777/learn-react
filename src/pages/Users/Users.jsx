import React, { Component } from "react";
import UserList from "../../components/UserList";

class Users extends Component {
  render() {
    return <>{!this.props.children ? <UserList /> : this.props.children}</>;
  }
}

export default Users;
