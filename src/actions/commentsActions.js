import { FETCH_COMMENTS, FETCH_COMMENT } from "./constants";

import axios from "axios";

export const fetchComments = () => despatch => {
  axios.get("https://jsonplaceholder.typicode.com/comments/").then(response =>
    despatch({
      type: FETCH_COMMENTS,
      payload: response.data
    })
  );
};

export const fetchComment = commentId => despatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    .then(response =>
      despatch({
        type: FETCH_COMMENT,
        payload: response.data
      })
    );
};
