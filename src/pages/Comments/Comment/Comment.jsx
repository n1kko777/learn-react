import React, { Component } from "react";
import axios from "axios";

import CommentProfile from "../../../components/CommentList/Comment";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null
    };
  }
  render() {
    return (
      <>
        {this.state.comment && (
          <CommentProfile isLink={false} {...this.state.comment} />
        )}
      </>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments/${
          this.props.params.commentId
        }`
      )
      .then(response => {
        this.setState({ comment: response.data });
      });
  }
}

export default Comment;
