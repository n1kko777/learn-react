import React, { Component } from "react";
import User from "./User";

// redux
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";

class UserList extends Component {
  render() {
    if (!this.props.users) {
      return null;
    }

    const users = this.props.users.map((user, index) => {
      return <User isLink={true} key={index} {...user} />;
    });

    return (
      <>
        <h1 className="title">Пользователи</h1>
        {users}
      </>
    );
  }

  componentWillMount() {
    this.props.fetchUsers();
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
