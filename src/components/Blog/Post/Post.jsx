import React, { Fragment, Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const { title, body } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{title}</strong>
                <br />
                {body}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

Post.defaultProps = {
  title: "No data",
  href: "..."
};

export default Post;
