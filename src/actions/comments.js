import axios from "axios";

export const fetchComments = () => dispatch => {
  axios
  .get("https://jsonplaceholder.typicode.com/comments/")
  .then(response => {
    dispatch({ type: "FETCH_COMMENTS", payload: response.data });
  })
  .catch(error => {
    dispatch({
      type: "ERROR_COMMENTS",
      payload: [
        {
          name: error.message,
          body: "Please, try later",
          isLink: false
        }
      ]
    });
  });
};
