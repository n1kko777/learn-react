import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchUser } from "../../../actions/user";

import UserProfile from "../../../components/UserList/User";

class User extends Component {
  render() {
    return (
      <>
        {this.props.user && <UserProfile isLink={false} {...this.props.user} />}
      </>
    );
  }

  componentDidMount() {
    this.props.onFetchUser(parseInt(this.props.match.params.userId));
  }
}

export default connect(
  (state, ownProps) => ({
    user: state.user,
    ownProps: ownProps
  }),
  dispatch => ({
    onFetchUser: userID => {
      dispatch(fetchUser(userID));
    }
  })
)(User);
