import dispatcher from "../dispatcher";
import { ADD_USER, GET_USER } from "../constants/userContants";
import axios from "axios";

export function addUser(id, name, username, email, phone, website) {
  dispatcher.dispatch({
    type: ADD_USER,
    data: { id, name, username, email, phone, website }
  });
}

export function getUsers() {
  axios.get(`https://jsonplaceholder.typicode.com/users/`).then(response => {
    dispatcher.dispatch({
      type: GET_USER,
      data: response.data
    });
  });
}
