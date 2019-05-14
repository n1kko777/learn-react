import axios from "axios";

export const fetchUser = userID => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => {
      dispatch({ type: "FETCH_USER", payload: response.data });
    })
    .catch(response => {
      dispatch({ type: "FETCH_USER_ERROR", payload: response });
    });
};
