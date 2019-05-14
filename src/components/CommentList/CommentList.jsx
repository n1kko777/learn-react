import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comments";

import Comment from "./Comment";

class CommentList extends Component {
  render() {
    if (!this.props.comments) {
      return null;
    }

    const comments = this.props.comments.map((comment, index) => {
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
    this.props.onFetchComments();
  }
}

export default connect(
  state => ({
    comments: state.comments
  }),
  dispatch => ({
    onFetchComments: () => {
      dispatch(fetchComments());
    }
  })
)(CommentList);
