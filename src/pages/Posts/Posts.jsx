import React, { Component } from "react";
import PostList from "../../components/PostList";

class Posts extends Component {
  render() {
    return <>{!this.props.children ? <PostList /> : this.props.children}</>;
  }
}

export default Posts;
