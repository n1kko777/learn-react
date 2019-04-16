import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  render() {
    if (!this.state.posts) {
      return null;
    }

    const posts = this.state.posts.map((post, index) => {
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
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(response => {
      this.setState({ posts: response.data });
    });
  }
}

export default PostList;
