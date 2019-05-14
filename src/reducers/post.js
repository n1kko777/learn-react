export default function reducer(state = null, action) {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    case "FETCH_POST_ERROR":
      return action.payload;

    default:
      break;
  }
  return state;
}
