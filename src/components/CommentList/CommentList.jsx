import React, { Component } from "react";
import axios from "axios";

import Comment from "./Comment";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  render() {
    if (!this.state.comments) {
      return null;
    }

    const comments = this.state.comments.map((comment, index) => {
      return <Comment isLink={true} key={index} {...comment} />;
    });

    return (
      <>
        <h1 className="title">Комменты</h1>
        {comments}
      </>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments/").then(response => {
      this.setState({ comments: response.data });
    });
  }
}

export default CommentList;
