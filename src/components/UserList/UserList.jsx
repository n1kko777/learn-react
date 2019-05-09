import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/users";

import User from "./User";

class UserList extends Component {
  render() {
    if (!this.props.users) {
      return null;
    }

    const users = this.props.users.map((userItem, index) => {
      return <User isLink={true} key={index} {...userItem} />;
    });

    return (
      <>
        <h1 className="title">Пользователи</h1>
        {users}
      </>
    );
  }

  componentDidMount() {
    this.props.onFetchUsers();
  }
}

export default connect(
  (state) => ({
    users: state.users
  }),
  dispatch => ({
    onFetchUsers: () => {
      dispatch(fetchUsers());
    }
  })
)(UserList);
