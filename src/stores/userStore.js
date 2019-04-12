import dispatcher from "../dispatcher";
import { ADD_USER, GET_USER } from "../constants/userContants";
import { EventEmitter } from "events";

class userStore extends EventEmitter {
  constructor() {
    super();

    this.users = [];

    this.getUsers = this.getUsers.bind(this);
    this.change = this.change.bind(this);
    this.addUsers = this.addUsers.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  change() {
    this.emit("change");
  }

  addUsers(user) {
    this.users = [user, ...this.users];
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case ADD_USER:
        this.addUsers(action.data);
        break;
      case GET_USER:
        this.getUsers(action.data);
        break;
    }
  }
}

const store = new userStore();
dispatcher.register(store.handleActions);

export default store;
