import React, { Component } from "react";
import axios from "axios";

import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render() {
    if (!this.state.users) {
      return null;
    }

    const users = this.state.users.map((user, index) => {
      return <User isLink={true} key={index} {...user} />;
    });

    return (
      <>
        <h1 className="title">Пользователи</h1>
        {users}
      </>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users/").then(response => {
      this.setState({ users: response.data });
    });
  }
}

export default UserList;
