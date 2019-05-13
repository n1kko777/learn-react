import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/posts";

import Post from "./Post";

class PostList extends Component {
  render() {
    if (!this.props.posts) {
      return null;
    }

    const posts = this.props.posts.map((post, index) => {
      return <Post isLink={true} key={index} {...post} />;
    });

    return (
      <>
        <h1 className="title">Посты</h1>
        {posts}
      </>
    );
  }

  componentDidMount() {
    this.props.onFetchPosts();
  }
}

export default connect(
  (state) => ({
    posts: state.posts
  }),
  dispatch => ({
    onFetchPosts: () => {
      dispatch(fetchPosts());
    }
  })
)(PostList);
