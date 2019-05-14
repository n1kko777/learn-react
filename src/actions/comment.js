import axios from "axios";

export const fetchComment = commentID => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments/${commentID}`)
    .then(response => {
      dispatch({ type: "FETCH_COMMENT", payload: response.data });
    })
    .catch(response => {
      dispatch({ type: "FETCH_COMMENT_ERROR", payload: response });
    });
};
