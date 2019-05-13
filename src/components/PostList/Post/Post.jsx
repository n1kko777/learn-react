import React, { Component } from "react";
import { Link } from "react-router";

class Post extends Component {
  render() {
    const { title, body, isLink, id } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              {isLink ? (
                <>
                  <Link to={`/posts/${id}`} className="is-size-4">
                    {title}
                  </Link>
                  <br />
                  <br />
                </>
              ) : (
                <p className="title is-size-4">{title}</p>
              )}
              <p>{body}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Post;
