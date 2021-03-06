import axios from "axios";

export const fetchPosts = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then(response => {
      dispatch({ type: "FETCH_POSTS", payload: response.data });
    })
    .catch(error => {
      dispatch({
        type: "ERROR_POSTS",
        payload: [
          {
            title: error.message,
            body: "Please, try later",
            isLink: false
          }
        ]
      });
    });
};
