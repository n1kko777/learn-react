import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchComment } from "../../../actions/comment";

import CommentProfile from "../../../components/CommentList/Comment";

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.comment && (
          <CommentProfile isLink={false} {...this.props.comment} />
        )}
      </>
    );
  }

  componentDidMount() {
    this.props.onFetchComment(parseInt(this.props.match.params.commentId));
  }
}

export default connect(
  state => ({
    comment: state.comment
  }),
  dispatch => ({
    onFetchComment: commentID => {
      dispatch(fetchComment(commentID));
    }
  })
)(Comment);
