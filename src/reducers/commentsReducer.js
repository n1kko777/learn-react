import { FETCH_COMMENTS, FETCH_COMMENT } from "../actions/constants";

const initialState = {
  comments: [],
  comment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case FETCH_COMMENT:
      return {
        ...state,
        comment: action.payload
      };

    default:
      return state;
  }
}
