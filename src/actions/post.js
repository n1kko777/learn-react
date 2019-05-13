import axios from "axios";

export const fetchPost = postID => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(response => {
      dispatch({ type: "FETCH_POST", payload: response.data });
    })
    .catch(response => {
      dispatch({ type: "FETCH_POST_ERROR", payload: response });
    });
};
