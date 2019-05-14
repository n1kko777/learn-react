import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchPost } from "../../../actions/post";

import PostProfile from "../../../components/PostList/Post";

class Post extends Component {
  render() {
    return (
      <>
        {this.props.post && <PostProfile isLink={false} {...this.props.post} />}
      </>
    );
  }

  componentDidMount() {
    this.props.onFetchPost(parseInt(this.props.match.params.postId));
  }
}

export default connect(
  state => ({
    post: state.post
  }),
  dispatch => ({
    onFetchPost: userID => {
      dispatch(fetchPost(userID));
    }
  })
)(Post);
