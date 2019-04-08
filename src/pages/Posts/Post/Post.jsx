import React, { Component } from "react";
import axios from "axios";

import PostProfile from "../../../components/PostList/Post";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };
  }
  render() {
    return (
      <>
        {this.state.post && <PostProfile isLink={false} {...this.state.post} />}
      </>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`
      )
      .then(response => {
        this.setState({ post: response.data });
      });
  }
}

export default Post;
