import React, { Fragment, Component } from "react";
import Comment from "./Comment";

// redux
import { connect } from "react-redux";
import { fetchComments } from "../../actions/commentsActions";

class CommentList extends Component {
  render() {
    if (!this.props.comments) {
      return null;
    }

    const comments = this.props.comments.map((comment, index) => {
      return <Comment isLink={true} key={index} {...comment} />;
    });

    return (
      <Fragment>
        <h1 className="title">Комменты</h1>
        {comments}
      </Fragment>
    );
  }

  componentWillMount() {
    this.props.fetchComments();
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
