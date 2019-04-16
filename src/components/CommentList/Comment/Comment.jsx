import React, { Component } from "react";
import { Link } from "react-router";

class Comment extends Component {
  render() {
    const { name, body, isLink, id } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              {isLink ? (
                <>
                  <Link to={`/comments/${id}`} className="is-size-4">
                    {name}
                  </Link>
                  <br />
                  <br />
                </>
              ) : (
                <p className="title is-size-4">{name}</p>
              )}
              <p>{body}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Comment;
