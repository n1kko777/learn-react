export default function reducer(state = null, action) {
  switch (action.type) {
    case "FETCH_COMMENT":
      return action.payload;
    case "FETCH_COMMENT_ERROR":
      return action.payload;

    default:
      break;
  }
  return state;
}
