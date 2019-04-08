import React, { Component } from "react";
import { Link } from "react-router";

class User extends Component {
  render() {
    const { name, username, email, phone, website, id, isLink } = this.props;

    return (
      <article className="message">
        <div className="message-header">
          <div>
            {isLink ? (
              <>
                <Link to={`/users/${id}`} className="is-size-4">
                  {name}
                </Link>
                <br />
              </>
            ) : (
              <p className="is-size-4">{name}</p>
            )}
            <small className="is-size-6 has-text-weight-light">
              @{username}
            </small>
          </div>
        </div>
        <div className="message-body">
          <p className="subtitle">{email}</p>
          <p className="subtitle">{phone}</p>
          <p className="subtitle">{website}</p>
        </div>
      </article>
    );
  }
}

export default User;
