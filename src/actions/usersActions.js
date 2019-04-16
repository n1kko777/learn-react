import {  FETCH_USERS, FETCH_USER } from "./constants";

import axios from "axios";

export const fetchUsers = () => despatch => {
  axios.get("https://jsonplaceholder.typicode.com/users/").then(response =>
    despatch({
      type: FETCH_USERS,
      payload: response.data
    })
  );
};

export const fetchUser = userId => despatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response =>
      despatch({
        type: FETCH_USER,
        payload: response.data
      })
    );
};
