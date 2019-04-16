import React, { Component } from "react";
import CommentProfile from "../../../components/CommentList/Comment";

// redux
import { connect } from "react-redux";
import { fetchComment } from "../../../actions/commentsActions";

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

  componentWillMount() {
    this.props.fetchComment(this.props.params.commentId);
  }
}

export default connect(
  null,
  { fetchComment }
)(Comment);
