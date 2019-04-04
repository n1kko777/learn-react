import React, { Fragment, Component } from "react";

import Post from "./Post";

import "./style.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const posts = this.props.blogPosts.map(item => (
      <Post key={item.id} title={item.title} body={item.body} />
    ));

    return <div className="block-post">{posts}</div>;
  }
}

export default Blog;
