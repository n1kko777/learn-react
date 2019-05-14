import axios from "axios";

export const fetchUsers = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/")
    .then(response => {
      dispatch({ type: "FETCH_USERS", payload: response.data });
    })
    .catch(error => {
      dispatch({
        type: "ERROR_USERS",
        payload: [
          {
            name: error.message,
            username: "n1kko777",
            website: "Please, try later",
            isLink: false
          }
        ]
      });
    });
};
