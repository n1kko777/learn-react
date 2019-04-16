import React, { Component } from "react";
import UserProfile from "../../../components/UserList/User";

// redux
import { connect } from "react-redux";
import { fetchUser } from "../../../actions/usersActions";

class User extends Component {
  render() {
    return (
      <>
        {this.props.user && <UserProfile isLink={false} {...this.props.user} />}
      </>
    );
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.userId);
  }
}

export default connect(
  null,
  { fetchUser }
)(User);
