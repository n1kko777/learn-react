import React, { Component } from "react";
import UserStore from "../../stores/userStore";
import { addUser, getUsers } from "../../actions/userActions";

import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.onUserChange = this.onUserChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  onUserChange() {
    this.setState({ users: UserStore.users });
  }

  newUser() {
    const [id, name, username, email, phone, website] = [
      100,
      "Никита",
      "n1kko777",
      "info@info.com",
      "8900345123678",
      "www.mySuperWebSite.pro"
    ];

    addUser(id, name, username, email, phone, website);
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
        <div className="add-button">
          <h1 className="title is-marginless">Пользователи</h1>
          <button className="button is-medium" onClick={this.newUser}>
            <i className="fa fa-plus" />
          </button>
        </div>
        {users}
      </>
    );
  }

  componentDidMount() {
    UserStore.on("change", this.onUserChange);
    getUsers();
  }

  componentWillUnmount() {
    UserStore.removeListener("change", this.onUserChange);
  }
}

export default UserList;
