import axios from "axios";

export const fetchComments = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/comments/").then(response => {
    dispatch({ type: "FETCH_COMMENTS", payload: response.data });
  });
};
