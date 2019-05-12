import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
                  <NavLink to={`/posts/${id}`} className="is-size-4">
                    {title}
                  </NavLink>
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
